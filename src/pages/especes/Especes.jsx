// 🪸 Faune et flore marine côtière du 64  A GARDER COMME TITRE !!!!!!
// 🌿 Végétaux marins et algues
// 🐙 Céphalopodes observables en bord de côte
// 🦞 Crustacés présents sur la côte
// 🐟 Poissons côtiers fréquents

import { div } from "framer-motion/client";

const Especes = () => {
    
    const Poissons =[
        {
            nom: "Poisson-perroquet", 
            description: "Observé occasionnellement sur la côte basque, notamment avec le réchauffement." ,
            image: ""

        },
        {
            nom: "Grondin", 
            description: "Peut se croiser sur les zones sableuses ou mixtes, surtout en fin d'été." ,
            image: ""

        },
        {
            nom: "Gobies et blennies", 
            description: "Petits poissons de rochers très courants. Peu pêchés, mais typiques des anfractuosités." ,
            image: ""

        },
        {
            nom: "Tacaud", 
            description: "Présent dans les zones rocheuses ou en bordure de sable. Parfois en petits groupes." ,
            image: ""

        },
        {
            nom: "Vieille", 
            description: "Poisson très commun dans les rochers. Colorée et facile à approcher." ,
            image: ""

        },
        {
            nom: "Mulet", 
            description: "Très fréquent sur la côte basque, en bancs. Espèce typique de surface ou port/digue." ,
            image: ""

        },
        {
            nom: "Bar (Loup de mer)", 
            description: "Présent toute l’année, surtout en été près des vagues et rochers. Méfiant et très recherché." ,
            image: ""

        },
        {
            nom: "Sars (commun, à tête noire, tambour)", 
            description: "Très abondants sur les zones rocheuses. Poissons de bordures, souvent curieux." ,
            image: ""

        },
        {
            nom: "Dorade royale", 
            description: "Présente dans les fonds rocheux et herbiers. Plus active en été." ,
            image: ""

        },
        {
            nom: "Baliste", 
            description: "Parfois observé en été, sur les zones rocheuses. Poisson curieux." ,
            image: ""

        },
        {
            nom: "Roussette (petit requin)", 
            description: "Présente sur les fonds sableux, en profondeur moyenne." ,
            image: ""

        },
    ];

    const Crustaces =[
        {
            nom: "Tourteau", 
            description: "Fréquent sur les zones rocheuses ou sableuses. Se cache sous les rochers." ,
            image: ""

        },
         {
            nom: "Araignée de mer", 
            description: "Très fréquente au printemps et début d’été. Présente sur les zones mixtes." ,
            image: ""

        },
         {
            nom: "Homard", 
            description: "Plus rare, mais présent dans les failles profondes des roches côtières." ,
            image: ""

        },
    ];


    
    const Cephalopodes =[
        {
            nom: "Poulpe", 
            description: "Très commun. Se camoufle dans les rochers. Facilement visible à marée basse aussi." ,
            image: ""

        },
        {
            nom: "Seiche", 
            description: "Parfois visible sur les fonds sableux ou près des herbiers, surtout au printemps." ,
            image: ""

        },
    ];

    const VégétauxMarinsAlgues =[
        {
            nom: "Sargasses", 
            description: "Algue invasive qui forme de grandes touffes, visible surtout en été." ,
            image: ""

        },
        {
            nom: "Algues brunes", 
            description: "Fréquentes sur l’estran et sous l’eau peu profonde. Abritent crabes, petits poissons." ,
            image: ""

        },
        {
            nom: "Algues rouges", 
            description: "Très présentes sur les rochers. Forment de beaux tapis violets ou rouges." ,
            image: ""

        },
        {
            nom: "Herbiers de zostères", 
            description: "Mollusques collés aux rochers. Typiques des zones à marée." ,
            image: ""

        },
    ];
    const InvertebresAnimauxFixes =[
        {
            nom: "Patelles (chapeaux chinois)", 
            description: "Mollusques collés aux rochers. Typiques des zones à marée." ,
            image: ""

        },
        {
            nom: "Petites ascidies", 
            description: "Colonies transparentes ou colorées fixées aux rochers." ,
            image: ""

        },
        {
            nom: "Oursins violets", 
            description: "Très communs. Ils se nourrissent d’algues et creusent parfois les rochers." ,
            image: ""

        },
        {
            nom: "Éponges marines", 
            description: "Fixées sur les rochers. De formes variées, souvent orange, jaunes ou grises." ,
            image: ""

        },
        {
            nom: "Anémones de mer", 
            description: "Très visibles sur les rochers peu profonds. Couleur verte avec reflets violets. Parfois urticantes." ,
            image: ""

        }
    ];
    const Coquillages =[
        {
            nom: "Bigorneaux", 
            description: "Petits escargots marins présents sur l’estran." ,
            image: ""

        },
        {
            nom: "Ormeaux", 
            description: "Très rare et réglementé. Coquillage plat caché sous les rochers." ,
            image: ""

        },
        {
            nom: "Palourdes et coques", 
            description: "Enterrées dans le sable en zone calme. Peu visibles en plongée mais présentes." ,
            image: ""

        }
    ];

    const Rochers =[
        {
            nom: "Tombants rocheux", 
            description:"Typiques de la côte. Grottes, failles et caches à poissons." ,
            image: ""

        },
        {
            nom: "Dalles rocheuses plates", 
            description:"Zones peu profondes riches en vie. Parfaites pour la chasse du bord." ,
            image: ""

        },
        {
            nom:"Zones sableuses mixtes" , 
            description:"Abritent poissons plats, céphalopodes, araignées de mer." ,
            image:""

        },
        {
            nom:"Épaves (petites)" , 
            description:"Il en existe quelques-unes accessibles en apnée ou en PMT, souvent riches en vie." ,
            image:""

        }
    ];

    const renderCategory = (title , items) => (
        <div>
            <h2>{title}</h2>
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.nom}/>
                        <h4>{item.nom}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>



    );



    
  return (
    <div className="especes-container">

        
    </div>
  )
}

export default Especes