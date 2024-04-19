import { addDoc, collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../DatabaseConfig";
import { AuthContext } from "../contexts/AuthContext";
import CategorieTable from "./CategorieTable";

const Categories = () => {
    const [name, setName] = useState("")
    const {user} = useContext(AuthContext)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
    }, [])
    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        if (name !== '') {
            const document = collection(db, "categories")
            try {
                await addDoc(document, {
                    name: name,
                    uid: user.userInfo.uid
                })
                setName("")
                getCategories()
            } catch (error) {
                console.log(error);
            }
            
        }
    }

    const getCategories = async () => {
        const doc2 = collection(db, 'categories')
        const q = query(doc2, where('uid', '==', user.userInfo.uid))
        getDocs(q).then(item=>{
            const data = []
            item.docs.map((item) => {
                data.push({ ...item.data(), id: item.id })
            })
            setCategories(data)
        })
    }

    const deleteCategorie = async (id, index)=>{
        const deleted = doc(db, 'categories', id)
        try {
            await deleteDoc(deleted)
            getCategories()
            categories.splice(index, 1)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <h1 className="m-0">Gestion des Catégories</h1>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-default">
                                Nouvelle Catégorie
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
                            <CategorieTable deleted={deleteCategorie} items={categories} />
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
                                <h4 className="modal-title">Nouvelle Catégorie</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Nom de la catégorie" />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button onClick={()=>setName("")} type="button" className="btn btn-default" data-dismiss="modal">Fermer</button>
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Categories;
