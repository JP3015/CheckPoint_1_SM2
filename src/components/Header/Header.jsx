import React from 'react'
import './Header.css'
import autor from '../img/author.png'

export default function Header(){
    return(

        <header>
            <div className= 'header-main'>
                <nav className= 'content-menu'>
                    <ul className= 'menu-header'>
                        <li><a href="" target>Nacional</a></li>
                        <li><a href="">Business</a></li>
                        <li><a href="">Internacional</a></li>
                        <li><a href=""><b>Saúde</b></a></li>
                        <li><a href="">Tecnologia</a></li>
                        <li><a href="">Esporte</a></li>
                        <li><a href="">Entreterimento</a></li>
                        <li><a href="">Estilo</a></li>
                        <li><a href="">Viagem&Gastronomia</a></li>
                        <li><a href="">Newsletters</a></li>
                        <li><a href="">Podcasts</a></li>
                    </ul>
                </nav>
            </div>
            <div className = 'post-header'>
                <h1 className = 'post-title'>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
                <p className = 'post-excerpt'>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
                <img src={autor} alt="autor-image"/>
            </div>
            <div className= 'higher-share'>
                <span className= 'post-data'>24/08/2021 ás 16:44 | Atualizado às 16:56</span>
            </div>
        </header>

    )
}

