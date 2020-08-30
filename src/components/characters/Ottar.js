import React from 'react';
import '../../index.css';
import '../../projects.css';
import DiceComponent from '../DiceComponent';

function Notes() {
    return <div>
        <h5>Pengar</h5>
    1100 silver

    <h5>Närstridsvapen</h5>
    <table>
        <tr>
            <td>
                Vapen
            </td>
            <td>
            Huggskada
            </td>
            <td>
            Krosskada
            </td>
            <td>
            Stickskada
            </td>
        </tr>
            <td>
            Stridshammare
            </td>
            <td>
            -
            </td>
            <td>
            K+Ob2T6+2
            </td>
            <td>
            S+Ob1T6+2
            </td>
        <tr>
        </tr>
    </table>

    <h5>Rustning</h5>
    <table>
        <tr>
            <td>
                Typ
            </td>
            <td>
            Hugg
            </td>
            <td>
            Kross
            </td>
            <td>
            Stick
            </td>
        </tr>
            <td>
            Härdat läder
            </td>
            <td>
            5
            </td>
            <td>
            6
            </td>
            <td>
            5
            </td>
        <tr>
        </tr>
    </table>
    <h5>Utrustning</h5>
    Reseutrustning: Bestående av en slitstark mantel (1,9 kg), ett par kraftiga skor (0,3 kg), en vandringsstav (1,5 kg), en vattenflaska (1,3 liter; 0,4 kg) och en ryggsäck (1,0 kg) eller remväska (0,9 kg). Totalt blir det 5,1 kg (alternativt 5,0 om rollpersonen väljer en remväska istället för en ryggsäck).

    <p/>Proviant: Bestående av sju dagars färsk färdkost (exempelvis kött, fisk, bröd, frukt och grönsaker; 5,6 kg) samt ytterligare två veckors torrproviant (exempelvis torkat kött, torkad fisk och skorpor; 3,5 kg). Dessutom ingår ett fullt vattenskinn (5 liter; 5,8 kg), ett fullt vinskinn (fem liter; 5,8 kg) och en liten kagge (10,5 liter; 12,5 kg) med öl. Fullständig vikt: 33,2 kg.

    <p/>Klätterutrustning: Bestående av två starka rep på vardera 20 meter (4,0 kg), änterhake (1,0 kg), fem kilar (1,5 kg), en liten hammare (0,3 kg) och ett kraftigt midjebälte med en repögla i (0,4 kg). Fullständig vikt: 7,2 kg.

    <p/>Skogsutrustning: Bestående av en handyxa (1,0 kg), en vedyxa (1,9 kg), fem meter rep (0,5 kg), ett femliters vattenskinn (0,8 kg), rem för att bära ved (0,1 kg) och en skogsmössa (0,3 kg). Fullständig vikt: 4,6 kg.
    </div>;
}

class Ottar extends React.Component {
    render() {
        return (<div><DiceComponent />
               <h1>Ottar Silverros</h1>

<div>
    <hr />
    <div class="boxRowContainer">
        <div class="boxTopLeft">
            <table class="charDataTabel">
                <tr>
                    <td>
                        Namn
                    </td>
                    <td class="dataEntry">
                        Ottar Silverros
                    </td>
                </tr>
                <tr>
                    <td>
                        Yrke
                    </td>
                    <td class="dataEntry">
                        Tempelriddare
                    </td>
                </tr>
            </table>
            <table class="charDataTabel">
                <tr>
                    <td>
                        Ras
                    </td>
                    <td class="dataEntry">
                        M&#xE4;nniska
                    </td>
                    <td>
                        L&#xE4;ngd
                    </td>
                    <td class="dataEntry">
                        178 cm
                    </td>
                </tr>
                <tr>
                    <td>
                        K&#xF6;n
                    </td>
                    <td class="dataEntry">
                        Man
                    </td>
                    <td>
                        Vikt
                    </td>
                    <td class="dataEntry">
                        73 kg
                    </td>
                </tr>
                <tr>
                    <td>
                        &#xC5;lder
                    </td>
                    <td class="dataEntry">
                        23
                    </td>
                    <td>
                        Kropstyp
                    </td>
                    <td class="dataEntry">
                        Normal
                    </td>
                </tr>
            </table>
            <table class="charDataTabel">
                <tr>
                    <td>
                        Hemort
                    </td>
                    <td class="dataEntry">
                        Talon
                    </td>
                </tr>
                <tr>
                    <td>
                        Religion
                    </td>
                    <td class="dataEntry">
                        Allvetandets br&#xF6;draskap
                    </td>
                </tr>
                <tr>
                    <td>
                        Vapenarm
                    </td>
                    <td class="dataEntry">
                        H&#xF6;ger
                    </td>
                </tr>
            </table>
        </div>
        <div class="boxTopCenter">
            <table class="charDataTabel">
                <tr>
                    <td>
                        Styrka
                    </td>
                    <td class="dataEntry">
                        9
                    </td>
                </tr>
                <tr>
                    <td>
                        T&#xE5;lighet
                    </td>
                    <td class="dataEntry">
                        13
                    </td>
                </tr>
                <tr>
                    <td>
                        R&#xF6;rlighet
                    </td>
                    <td class="dataEntry">
                        8
                    </td>
                </tr>
                <tr>
                    <td>
                        Personlighet
                    </td>
                    <td class="dataEntry">
                        11
                    </td>
                </tr>
                <tr>
                    <td>
                        Psyke
                    </td>
                    <td class="dataEntry">
                        11
                    </td>
                </tr>
                <tr>
                    <td>
                        Vilja
                    </td>
                    <td class="dataEntry">
                        8
                    </td>
                </tr>
                <tr>
                    <td>
                        Bildning
                    </td>
                    <td class="dataEntry">
                        17
                    </td>
                </tr>
                <tr>
                    <td>
                        Syn
                    </td>
                    <td class="dataEntry">
                        9
                    </td>
                </tr>
                <tr>
                    <td>
                        H&#xF6;rsel
                    </td>
                    <td class="dataEntry">
                        6
                    </td>
                </tr>
            </table>
        </div>
        <div class="boxTopRight">
            <table class="charDataTabel">
                <tr>
                    <td>
                        Spelare
                    </td>
                    <td class="dataEntry">
                        Joachim Hansen
                    </td>
                </tr>
                <tr>
                    <td>
                        Lojalitet
                    </td>
                    <td class="dataEntry">
                        13
                    </td>
                </tr>
                <tr>
                    <td>
                        Heder
                    </td>
                    <td class="dataEntry">
                        16
                    </td>
                </tr>
                <tr>
                    <td>
                        Amor
                    </td>
                    <td class="dataEntry">
                        3
                    </td>
                </tr>
                <tr>
                    <td>
                        Aggresion
                    </td>
                    <td class="dataEntry">
                        10
                    </td>
                </tr>
                <tr>
                    <td>
                        Tro
                    </td>
                    <td class="dataEntry">
                        13
                    </td>
                </tr>
                <tr>
                    <td>
                        Generositet
                    </td>
                    <td class="dataEntry">
                        15
                    </td>
                </tr>
                <tr>
                    <td>
                        Rykte
                    </td>
                    <td class="dataEntry">
                        5
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        Tur
                    </td>
                    <td class="dataEntry">
                        11
                    </td>
                    <td>
                        Qadosh
                    </td>
                    <td class="dataEntry">
                        6
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="boxRowContainer">
        <div class="boxBottomLeft">
            <table class="charDataTabel">
                <tr>
                    <td>
                        VINIT
                    </td>
                    <td class="dataEntry">
                        7
                    </td>
                    <td>
                        Insikt
                    </td>
                    <td class="dataEntry">
                        7
                    </td>
                </tr>
            </table>
            <table class="charDataTabel">
                <tr>
                    <td>
                        Chockv&#xE4;rde
                    </td>
                    <td class="dataEntry">
                        10
                    </td>
                    </tr><tr>
                    <td>
                        Skadekolumner
                    </td>
                    <td class="dataEntry">
                        6
                    </td>
                </tr>
            </table>
        </div>
        <div class="boxBottomContainer">
            <div class="boxRowContainer">
                <div class="boxBottomLeft">
                    <table class="charDataTabel">
                        <tr>
                            <th>
                                F&#xD6;R
                            </th>
                            <th class="dataEntry">
                                7 m/r
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Spr&#xE5;ng
                            </th>
                            <th class="dataEntry">
                                14 m/r
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Spurt
                            </th>
                            <th class="dataEntry">
                                21 m/r
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="boxBottomRight">
                </div>
            </div>
            <div class="boxRowContainer">
                <div class="boxBottomDmg">
                    <div class="">
                        Grund-<br />skada
                    </div>
                    <table class="charDataTabel">
                        <tr>
                            <td>
                                Hugg
                            </td>
                            <td>
                                Kross
                            </td>
                            <td>
                                Stick
                            </td>
                        </tr>
                        <tr>
                            <td class="dataEntry">
                                Ob1T6-1
                            </td>
                            <td class="dataEntry">
                                Ob1T6
                            </td>
                            <td class="dataEntry">
                                Ob1T6-1
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="boxBottomLeft">
                    <table class="charDataTabel">
                        <tr>
                            <td>
                                B&#xE4;rf&#xF6;rm&#xE5;ga
                            </td>
                            <td class="dataEntry">
                                11 kg
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>


</div>
<h4>Anteckningar</h4>
<hr />
<Notes />
<div>
    <h4>Färdigheter</h4>
    <hr />
    <div class="boxRowContainer">
        <div>
            <table>
                            <tr>
                                <td>
                                    <h6>Stridsvana</h6>
                                </td>
                                <td class="dataEntry">
                                    11
                                </td>
                            </tr>
                </table>
                <h5>Rörelsefärdigheter</h5>
                <table>
                                <tr>
                                    <td>
                                        Kasta
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Kl&#xE4;ttra
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        K&#xF6;ra
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Skidor
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Smyga
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Undvika
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Hoppa
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        G&#xF6;mma
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fingerf&#xE4;rdighet
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Dansa
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Rida
                                    </td>
                                    <td class="dataEntry">
                                        6
                                    </td>
                                </tr>
                    </table>
                    <h5>Kunskapsfärdigheter</h5>
                    <table>
                                    <tr>
                                        <td>
                                            Anatomi
                                        </td>
                                        <td class="dataEntry">
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Bergskunskap
                                        </td>
                                        <td class="dataEntry">
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Bibliotekskunskap
                                        </td>
                                        <td class="dataEntry">
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Lagkunskap
                                        </td>
                                        <td class="dataEntry">
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Matlagning
                                        </td>
                                        <td class="dataEntry">
                                            5
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ockultism
                                        </td>
                                        <td class="dataEntry">
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            R&#xE4;kning
                                        </td>
                                        <td class="dataEntry">
                                            5
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Filosofi
                                        </td>
                                        <td class="dataEntry">
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            V&#xE4;rdera
                                        </td>
                                        <td class="dataEntry">
                                            3
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Geografi
                                        </td>
                                        <td class="dataEntry">
                                            12
                                        </td>
                                    </tr>
                        </table>
                        <h5>Vildmarksfärdigheter</h5>
                        <table>
                                        <tr>
                                            <td>
                                                Sp&#xE5;ra
                                            </td>
                                            <td class="dataEntry">
                                                5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                V&#xE4;derk&#xE4;nnedom
                                            </td>
                                            <td class="dataEntry">
                                                8
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                &#xD6;verlevnad
                                            </td>
                                            <td class="dataEntry">
                                                5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Fiske
                                            </td>
                                            <td class="dataEntry">
                                                5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Speja
                                            </td>
                                            <td class="dataEntry">
                                                5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                S&#xF6;ka
                                            </td>
                                            <td class="dataEntry">
                                                10
                                            </td>
                                        </tr>
                            </table>
                        </div><div>
                            <h5>Sociala färdigheter</h5>
                            <table>
                                            <tr>
                                                <td>
                                                    F&#xF6;rf&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    F&#xF6;rh&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Gyckla
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Handel
                                                </td>
                                                <td class="dataEntry">
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ledarskap
                                                </td>
                                                <td class="dataEntry">
                                                    11
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sk&#xE5;despel
                                                </td>
                                                <td class="dataEntry">
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Spel
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Undervisning
                                                </td>
                                                <td class="dataEntry">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    &#xD6;vertala
                                                </td>
                                                <td class="dataEntry">
                                                    14
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Diplomati
                                                </td>
                                                <td class="dataEntry">
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ber&#xE4;ttarkonst
                                                </td>
                                                <td class="dataEntry">
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sjunga
                                                </td>
                                                <td class="dataEntry">
                                                    10
                                                </td>
                                            </tr>
                                </table>

                                <h5>Språkfärdigheter</h5>
                                <table>
                                    </table>
                                    <h5>Mystiska färdigheter</h5>
                                    <table>
                                                    <tr>
                                                        <td>
                                                            Ceremoni
                                                        </td>
                                                        <td class="dataEntry">
                                                            2
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Transformering
                                                        </td>
                                                        <td class="dataEntry">
                                                            10
                                                        </td>
                                                    </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <h5>Vapenfärdigheter</h5>
                                        <table>
                                                        <tr>
                                                            <td>
                                                                Kastyxa
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Klubba
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Dolk
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Armborst
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                B&#xE5;ge
                                                            </td>
                                                            <td class="dataEntry">
                                                                15
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastklubba
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Lans
                                                            </td>
                                                            <td class="dataEntry">
                                                                15
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Sk&#xF6;ld
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Slagsm&#xE5;l
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Spjut
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Stav
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                St&#xE5;ngvapen
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Sv&#xE4;rd
                                                            </td>
                                                            <td class="dataEntry">
                                                                15
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Yxa
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kedjevapen
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastspjut
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastkniv
                                                            </td>
                                                            <td class="dataEntry">
                                                                6
                                                            </td>
                                                        </tr>
                                            </table>
                                        </div>
                                    </div>

                                    <h4>Bakgrund</h4>
                                    <hr />
                                    <dl class="row">
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                Lyckad aff&#xE4;r. Rollpersonen har gjort en braaff&#xE4;r. Rollpersonen har nu Ob3T6&#xF8FF;100silvermynt.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Fysiska egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Chockresistent. Chockslag blir alltid en niv&#xE5;enklare (&#x96;Ob1T6).
                                            </dd>
                                            <dt class="col-sm-2">
                                                F&#xF6;rem&#xE5;l &amp; &#xE4;godelar
                                            </dt>
                                            <dd class="col-sm-10">
                                                B&#xF6;cker/skriftrullar. Rollpersonen har tillg&#xE5;ng T till Ob1T6 b&#xF6;cker i varierade &#xE4;mnen. Varje D bok behandlar en f&#xE4;rdighet &#x2013; spelledaren av g&#xF6;r vilka. Spr&#xE5;ket som b&#xF6;ckerna &#xE4;r skrivna p&#xE5; &#xE4;r ett som rollpersonen beh&#xE4;rskar. L&#xE4;sbar heten f&#xF6;r varje bok &#xE4;r normal (Ob3T6). Varje bok har ett f&#xF6;rkunskapskrav p&#xE5; Ob1T6&#x2B;4. Kunskaps - inneh&#xE5;llet &#xE4;r 1T6 h&#xF6;gre &#xE4;n f&#xF6;rkun skap s kravet. Sl&#xE5; separata slag f&#xF6;r var bok.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Egendom
                                            </dt>
                                            <dd class="col-sm-10">
                                                Stor g&#xE5;rd med 24 tunnland &#xE5;kerjord ellerbetes mark. G&#xE5;rden best&#xE5;r av ett stort boninghus,ett hus f&#xF6;r tj&#xE4;nstefolket, tv&#xE5; lador, enstor ladug&#xE5;rd och ett stall. P&#xE5; g&#xE5;rden finns &#xE4;ven&#xE5;tta tj&#xE4;nstehjon, tolv kor, tre h&#xE4;star, tv&#xE5; oxar,sex grisar och ett flertal h&#xF6;nor. En del avg&#xE5;rdens mark arrenderas av en torparfamilj.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Familj
                                            </dt>
                                            <dd class="col-sm-10">
                                                Flera ur rollpersonens familj &#xE4;r eller har varit &#xE4;ventyrare. Fadern har slagits mot troll och sett eld sprutande drakar, modern beh&#xE4;rskar magi och morbrorn har ryckt kejsaren i sk&#xE4;gget och &#xF6;verlevt. Fabulera ihop en kortfattad historia om rollpersonens &#xE4;ventyrliga sl&#xE4;ktingar &#x96; kom ih&#xE5;g att det &#xE4;r sl&#xE4;ktingarna som har &#xE4;ventyrat och inte rollpersonen. Spelledaren har naturligt vis vetor&#xE4;tt som vanligt.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Nackdelar
                                            </dt>
                                            <dd class="col-sm-10">
                                                Stor mage. Rollpersonen har en rej&#xE4;l mage som&#xF6;kar vikten med (Ob1T6&#x2B;10) kg och minskarR&#xD6;R med ett (&#x2013;1).
                                            </dd>
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                Hotad till livet. Rollpersonen har blivit skr&#xE4;mdefter att ha blivit hotad av ett par brottslingar.Rollpersonen &#xE4;r nu misst&#xE4;nksam mot fr&#xE4;mlingarav alla de slag.
                                            </dd>
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                K&#xE4;rleksdrama. Rollpersonen har haft en mycketA olycklig k&#xE4;rlekshistoria. Rollpersonen &#xE4;r olyckligoch har fortfarande djupa k&#xE4;nslor f&#xF6;r den andraparten. Sl&#xE5; 1T100 f&#xF6;r att avg&#xF6;ra vad som g&#xE4;ller:
                                            </dd>
                                    </dl>
                                </div>
        </div>);
    }
}

export default Ottar;