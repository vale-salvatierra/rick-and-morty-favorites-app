import { useContext, useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const FavButton = () => {
    const {heart} = useContext(FavoritesContext)
    const [isFavorite, setIsFavorite] = useState(false)

    const toggle = () =>{
        if
    }
    return (
        <Button variant="primary" onClick={heart} className="heart"><i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i></Button>
    );
}

export default FavButton;