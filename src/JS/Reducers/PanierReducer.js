import { ADD_PANIER } from "../ActionTypes/ActionsTypes"

const initialState={
    Items:[
        {
            id: Math.random(),
            name: "Villa Hamamet",
            description:
              "Premium Villas Costa Blanca est une agence immobilière de luxe spécialisée dans la vente de propriétés exclusives dans les meilleures zones de la province d'Alicante, Costa Blanca. Nous proposons une gamme exclusive de propriétés de luxe sur la Costa Blanca",
            price: "2500",
            photo:
              "https://www.premium-villas-costa-blanca.com/imagenes/upload/premiumvillas/premium-villas-costa-blanca-propiedades_639a061fe02f4-681x532.jpg",
          dispo:false},
          {
            id: Math.random(),
            name: "Villa Djerba",
            description:
              "une modeste villa avec piscine en cours de construction, de 170 m2, se situe à la zone touristique Djerba Midoun, à 3 min du plage la sirène.Elle se compose de 4 pièces,",
            price: "1500",
            photo:
              "https://pro.bnb.tn/assets/uploads/6caff56005e7809cf6b09eafe762d7c2-1574162799.jpeg",
          dispo:true},
    ],
    addItems:[],
    total:0
}

const PanierReducer =(state=initialState,{type,payload})=>{

    switch(type){
        case ADD_PANIER:
            return{...state,Items:state.Items.find(items=>items.id==payload)}
        case 
    }
}