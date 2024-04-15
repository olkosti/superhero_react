import superheroes from '../../data/superheroes.json'
import iconInfo from '../../assets/info.png'

export default function Card() {
    return ( 
        <div className='superhero__container'>{
            superheroes.map((item, index) => (
                <div className='superhero__card' key={index}>
                    <h2 className='superhero__name'>{item.name}</h2>
                    <a href="#" className="superhero__icon">
                        <img src={iconInfo} alt="icon-info" />
                    </a>
                    <div className="superhero__info">
                        <p>Вселенная: {item.universe}</p>
                        <p>Альтер эго: {item.alterego}</p>
                        <p>Род деятельности: {item.occupation}</p>
                        <p>Друзья: {item.friends}</p>
                        <p>Суперсилы: {item.superpowers}</p>                   
                    </div>
                    <img src={item.url} alt={item.name} className="superhero__images" />
                </div>
            ))
        }</div>
    )
}

