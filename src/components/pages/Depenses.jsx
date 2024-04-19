import { addDoc, collection, doc, query, getDocs, where, deleteDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../DatabaseConfig";
import { AuthContext } from "../contexts/AuthContext";
import DepenseTable from "./DepenseTable";

const Depenses = () => {
    const { user } = useContext(AuthContext)
    const [depenses, setDepenses] = useState([])
    const [categories, setCategories] = useState([])
    const [categorie, setCategorie] = useState("")
    const [date, setDate] = useState(new Date)
    const [montant, setMontant] = useState(0)
    const [motif, setMotif] = useState("")

    useEffect(() => {
        getDepenses()
        getCategories()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (categorie !== '' && date !== '' && montant !== '') {
            const document = collection(db, "depenses")
            console.log("ok");
            try {
                await addDoc(document, {
                    date: date,
                    montant: montant,
                    motif: motif,
                    categorie_id: categorie,
                    uid: user.userInfo.uid
                })
                getDepenses()
                resetData()
            } catch (error) {
                console.log(error);
            }

        }
    }

    const getDepenses = async () => {
        const doc2 = collection(db, 'depenses')
        const q = query(doc2, where('uid', '==' ,user.userInfo.uid))
        getDocs(q).then(item=>{
            const data = []
            item.docs.map((item) => {
                data.push({...item.data(), id: item.id})
            })
            setDepenses(data)
        })
    }

    const getCategories = async () => {
        const doc2 = collection(db, 'categories')
        const q = query(doc2, where('uid', "==", user.userInfo.uid))
        getDocs(q).then(item=>{
            const data = []
            item.docs.map((item) => {
                data.push({ ...item.data(), id: item.id })
            })
            setCategories(data)
        })
    }

    const getNamCategorie = (id) =>{
        const find = categories.find(i=>i.id === id)
        let val = ''
        if (find) {
            val = find.name
        }
        return val
    }

    const deleteDepense = async (id, index)=>{
        const deleted = doc(db, 'depenses', id)
        try {
            await deleteDoc(deleted)
            getCategories()
            depenses.splice(index, 1)
        } catch (error) {
            console.log(error);
        }
    }

    const resetData = ()=>{
        setDate(new Date)
        setMontant(0)
        setCategorie('')
        setMotif('')
    }

    return (
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="m-0">Gestion des Dépenses</h1>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-default">
                                Nouvelle Dépense
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content Header (Page header) */}

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            {/* Table catégorie */}
                            <DepenseTable deleted={deleteDepense} items={depenses} getNameCat={getNamCategorie} />
                            {/* Table catégorie */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Main content */}

            {/* Modal Ajout catégorie */}
            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <form onSubmit={handleSubmit} action="">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Nouvelle Dépense</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <input value={date} onChange={(e)=>setDate(e.target.value)} className="form-control mb-2" type="date" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className="form-select form-control mb-2">
                                            <option disabled value="">Catégorie</option>
                                            {
                                                categories.map((item, index) => (
                                                    <option value={item.id} key={index}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <input  value={montant} onChange={(e) => setMontant(e.target.value)} type="number" className="form-control" placeholder="Montant de la dépense" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea value={motif} onChange={(e)=>setMotif(e.target.value)} placeholder="Motif de la dépense" className="form-control" name="" id="" cols="" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fermer</button>
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Depenses;
