import iconInfo from '../../assets/info.png'

export default function CardProps(props) {
    return ( 
        <div className='superhero__container'>{
            
                <div className='superhero__card'>
                    <h2 className='superhero__name'>{props.name}</h2>
                    <a href="#" className="superhero__icon">
                        <img src={iconInfo} alt="icon-info" />
                    </a>
                    <div className="superhero__info">
                        <p>Вселенная: {props.universe}</p>
                        <p>Альтер эго: {props.alterego}</p>
                        <p>Род деятельности: {props.occupation}</p>
                        <p>Друзья: {props.friends}</p>
                        <p>Суперсилы: {props.superpowers}</p>                   
                    </div>
                    <img src={props.url} alt={props.name} className="superhero__images" />
                </div>
            
        }</div>
    )
}