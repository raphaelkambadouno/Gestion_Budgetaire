import { collection, getAggregateFromServer, getDocs, query, sum, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Rectangle,
    Bar,
    ResponsiveContainer
} from "recharts";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../../DatabaseConfig";
const Dashbord = () => {
    const { user } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    const [dataChart, setDataChart] = useState([])

    useEffect(() => {
        // Récupérer les noms de catégorie de manière asynchrone
        getCategories();
    }, [])

    useEffect(()=>{
        getDepenseParCategorie()
    }, [categories])

    const getDepenseParCategorie = async () => {
        const docRef = collection(db, 'depenses');
        const q = query(docRef, where('uid', '==', user.userInfo.uid));

        const snapshot = await getDocs(q);
        const sommesParCategorie = [];
        

        snapshot.forEach(doc => {
            const data = doc.data();
            const categorieId = data.categorie_id;
            const montant = parseFloat(data.montant);
            const name = getNamCategorie(categorieId)

            // Vérifier si la catégorie existe déjà dans sommesParCategorie
            const existingCategory = sommesParCategorie.find(item => item.categorieId === categorieId);

            if (existingCategory) {
                // Si la catégorie existe, ajouter le montant
                existingCategory.montant += montant;
            } else {
                // Sinon, ajouter une nouvelle entrée pour cette catégorie
                sommesParCategorie.push({
                    categorieId,
                    name,
                    montant
                });
            }
        });
        setDataChart(sommesParCategorie)
    }

    const getCategories = () => {
        const doc2 = collection(db, 'categories')
        const q = query(doc2, where('uid', "==", user.userInfo.uid))
        getDocs(q).then(item => {
            const data = []
            item.docs.map((item) => {
                data.push({ ...item.data(), id: item.id })
            })
            setCategories(data)
        })
    }

    const getNamCategorie = (id) => {
        const find = categories.find(i => i.id === id)
        let val = ''
        if (find) {
            val = find.name
        }
        return val
    }

    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Header (Page header) */}

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>

                                    <p>Dépense du jour</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

                                    <p>Dépense total</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>

                                    <p>Catégories</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <ResponsiveContainer width={'100%'} height={300}>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={dataChart}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        {/* <Legend /> */}
                                        <Bar dataKey="montant" fill={getRandomColor()} activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                    </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main content */}
        </>
    );
}

export default Dashbord;
