import React from 'react';
import '../../index.css';
import '../../projects.css';
import DiceComponent from '../DiceComponent';

function Notes() {
    return <div>
        <h5>Pengar</h5>
    1600 silver

    <h5>Avståndsvapen</h5>
    <table>
        <tr>
            <td>
                Vapen
            </td>
            <td>
            Räckvidd
            </td>
            <td>
            Kort
            </td>
            <td>
            Normalt
            </td>
            <td>
            Långt
            </td>
            <td>
            Mkt långt
            </td>
        </tr>
            <td>
            Kortbåge
            </td>
            <td>
            5-15-50-125m
            </td>
            <td>
            K+Ob2T6+2
            </td>
            <td>
            K+Ob2T6
            </td>
            <td>
            K+Ob1T6
            </td>
            <td>
            K+2
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

    <p/>Lägerutrustning: Ett tygtält för två personer (5,0 kg), en lykta med en halv liter lampolja (1,0 kg), två rejäla filtar (1,6 kg), fem meter snöre (0,1 kg), en liten kittel med tillhörande trefot och kedja (1,0 kg), en träslev och en vattensäck (tio liter; 1,5 kg) för att hämta vatten. Fullständig vikt: 10,2 kg.

    <p/>Fiskeutrustning: Bestående av nät (3,0 kg), trettio meter rev (0,3 kg), fem krokar, hjulster (1,5 kg), renskniv (0,2 kg) och en korg (0,1 kg). Fullständig vikt: 5,1 kg.

    <p/>Packdjur: Ett packdjur (exempelvis en packhäst, åsna, oxe, buffel eller kamel) med packväskor eller rack för last.

    <p/>Skidor: En uppsättning med skidor (7,0 kg), stavar (1,0 kg) och damasker (0,4 kg). I utrustningen ingår också ett par snöskor (2,0 kg) och ett par enkla skridskor (2,0 kg). Full - ständig vikt: 12,4 kg.

    </div>;
}

class Tegol extends React.Component {
    render() {
        return (<div><DiceComponent />
        <h1>Tegol</h1>

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
                        Tegol
                    </td>
                </tr>
                <tr>
                    <td>
                        Yrke
                    </td>
                    <td class="dataEntry">
                        Kirurg
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
                        164 cm
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
                        53 kg
                    </td>
                </tr>
                <tr>
                    <td>
                        &#xC5;lder
                    </td>
                    <td class="dataEntry">
                        25
                    </td>
                    <td>
                        Kropstyp
                    </td>
                    <td class="dataEntry">
                        Svag
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
                        Agnostiker
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
                        3
                    </td>
                </tr>
                <tr>
                    <td>
                        T&#xE5;lighet
                    </td>
                    <td class="dataEntry">
                        7
                    </td>
                </tr>
                <tr>
                    <td>
                        R&#xF6;rlighet
                    </td>
                    <td class="dataEntry">
                        11
                    </td>
                </tr>
                <tr>
                    <td>
                        Personlighet
                    </td>
                    <td class="dataEntry">
                        15
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
                        15
                    </td>
                </tr>
                <tr>
                    <td>
                        Syn
                    </td>
                    <td class="dataEntry">
                        31
                    </td>
                </tr>
                <tr>
                    <td>
                        H&#xF6;rsel
                    </td>
                    <td class="dataEntry">
                        13
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
                        Rasmus K&#xF6;hler
                    </td>
                </tr>
                <tr>
                    <td>
                        Lojalitet
                    </td>
                    <td class="dataEntry">
                        16
                    </td>
                </tr>
                <tr>
                    <td>
                        Heder
                    </td>
                    <td class="dataEntry">
                        13
                    </td>
                </tr>
                <tr>
                    <td>
                        Amor
                    </td>
                    <td class="dataEntry">
                        13
                    </td>
                </tr>
                <tr>
                    <td>
                        Aggresion
                    </td>
                    <td class="dataEntry">
                        7
                    </td>
                </tr>
                <tr>
                    <td>
                        Tro
                    </td>
                    <td class="dataEntry">
                        9
                    </td>
                </tr>
                <tr>
                    <td>
                        Generositet
                    </td>
                    <td class="dataEntry">
                        5
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
                        0
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
                        5
                    </td>
                    <td>
                        Insikt
                    </td>
                    <td class="dataEntry">
                        4
                    </td>
                </tr>
            </table>
            <table class="charDataTabel">
                <tr>
                    <td>
                        Chockv&#xE4;rde
                    </td>
                    <td class="dataEntry">
                        6
                    </td>
                    </tr><tr>
                    <td>
                        Skadekolumner
                    </td>
                    <td class="dataEntry">
                        5
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
                                1
                            </td>
                            <td class="dataEntry">
                                Ob1T6
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
                                5 kg
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
                </table>
                <h5>Rörelsefärdigheter</h5>
                <table>
                                <tr>
                                    <td>
                                        Skidor
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Smyga
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Undvika
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        K&#xF6;ra
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Kl&#xE4;ttra
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
                                        5
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
                                        Fingerf&#xE4;rdighet
                                    </td>
                                    <td class="dataEntry">
                                        5
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
                                        Hoppa
                                    </td>
                                    <td class="dataEntry">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Kasta
                                    </td>
                                    <td class="dataEntry">
                                        5
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
                                            15
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Astrologi
                                        </td>
                                        <td class="dataEntry">
                                            15
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ockultism
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
                                            8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            V&#xE4;xtl&#xE4;ra
                                        </td>
                                        <td class="dataEntry">
                                            15
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Filosofi
                                        </td>
                                        <td class="dataEntry">
                                            7
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Djurl&#xE4;ra
                                        </td>
                                        <td class="dataEntry">
                                            10
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
                                            L&#xE4;kekonst
                                        </td>
                                        <td class="dataEntry">
                                            15
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Geografi
                                        </td>
                                        <td class="dataEntry">
                                            5
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
                                                12
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                V&#xE4;derk&#xE4;nnedom
                                            </td>
                                            <td class="dataEntry">
                                                15
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
                                                15
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Jakt
                                            </td>
                                            <td class="dataEntry">
                                                8
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Sj&#xF6;mannaskap
                                            </td>
                                            <td class="dataEntry">
                                                15
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Speja
                                            </td>
                                            <td class="dataEntry">
                                                15
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                S&#xF6;ka
                                            </td>
                                            <td class="dataEntry">
                                                15
                                            </td>
                                        </tr>
                            </table>
                        </div><div>
                            <h5>Sociala färdigheter</h5>
                            <table>
                                            <tr>
                                                <td>
                                                    Handel
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ledarskap
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sk&#xE5;despel
                                                </td>
                                                <td class="dataEntry">
                                                    5
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
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    &#xD6;vertala
                                                </td>
                                                <td class="dataEntry">
                                                    15
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
                                                    F&#xF6;rh&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    15
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    F&#xF6;rf&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sjunga
                                                </td>
                                                <td class="dataEntry">
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ber&#xE4;ttarkonst
                                                </td>
                                                <td class="dataEntry">
                                                    5
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
                                                            Alkemi
                                                        </td>
                                                        <td class="dataEntry">
                                                            15
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
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kedjevapen
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Klubba
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Lans
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Sk&#xF6;ld
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Slagsm&#xE5;l
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Spjut
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Dolk
                                                            </td>
                                                            <td class="dataEntry">
                                                                15
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Armborst
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Stav
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                St&#xE5;ngvapen
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Sv&#xE4;rd
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Yxa
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastspjut
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastkniv
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Kastklubba
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
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
                                                Vildmarkens son. Rollpersonen har levt storadelar av sitt liv i vildmarksomr&#xE5;den och k&#xE4;nnersig mer hemma i obebodda omr&#xE5;den &#xE4;n blandm&#xE4;nniskor. Rollpersonen f&#xE5;r 2T6&#x2B;6 extraenheter som endast f&#xE5;r anv&#xE4;ndas f&#xF6;r att h&#xF6;ja Jakt,Sp&#xE5;ra och &#xD6;verlevnad. S&#xE4;nk BIL med tv&#xE5; (&#x2013;2).
                                            </dd>
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                Arrangerat gifterm&#xE5;l. Rollpersonen har blivitT gift med en make/maka som rollpersonen intealls &#xE4;lskar. Ta fram karakt&#xE4;rsdraget Amor f&#xF6;rmaken eller makan f&#xF6;r att avg&#xF6;ra om roll -personen &#xE4;r &#xE4;lskad.
                                            </dd>
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                Krossat hj&#xE4;rta. Rollpersonens hj&#xE4;rta har blivitT krossat efter en olycklig k&#xE4;rleksrelation.Rollpersonens Amor minskar med tv&#xE5; (&#x2013;2).
                                            </dd>
                                            <dt class="col-sm-2">
                                                H&#xE4;ndelser
                                            </dt>
                                            <dd class="col-sm-10">
                                                Expedition. Rollpersonen har deltagit i enT expedition. Det kan ha varit som en av expedi-D tionens ledare eller som en simpel b&#xE4;rare ochliknande. Vad f&#xF6;r typ av expedition beror p&#xE5;rollpersonen. Det kan vara en religi&#xF6;s, milit&#xE4;r,handels- eller utforskningsexpedition. Det &#xE4;rupp till spelledaren att beskriva hur expe -ditionen gick, kanske f&#xF6;rs&#xF6;ker rollpersonenfortfarande slutf&#xF6;ra den eller s&#xE4;tta samman enny expedition med samma m&#xE5;l. Anv&#xE4;nd 1T6&#x2B;4enheter att h&#xF6;ja Geografi och Kulturk&#xE4;nnedom.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Familj
                                            </dt>
                                            <dd class="col-sm-10">
                                                Rollpersonens familj har mycket l&#xE4;tt att bli v&#xE4;nner med individer fr&#xE5;n en annan ras. Roll - personen k&#xE4;nner instinktivt p&#xE5; sig vad som an - ses vara korrekt eller inkorrekt att g&#xF6;ra i olika situationer i samband med rasen i fr&#xE5;ga. Kom - mun ikation med rasen &#xE4;r en niv&#xE5; enklare (&#x96;Ob1T6). Exakta effekter av s&#xE5;dana slag &#xE4;r upp till spelledaren. Sl&#xE5; 1T100 f&#xF6;r att best&#xE4;m ma vilken ras. Om slaget visar p&#xE5; samma ras s&#xE5; &#xE4;r det n&#xE5;gon annan stam eller liknande inom rasen.
                                            </dd>
                                            <dt class="col-sm-2">
                                                F&#xF6;rem&#xE5;l &amp; &#xE4;godelar
                                            </dt>
                                            <dd class="col-sm-10">
                                                Rustning. En valfri rustningsdel (f&#xF6;r armoch bendelar avses hela par) av extra kraftigt material. Var och ett av de tre pansarv&#xE4;rdena &#xF6;kar med ett (&#x2B;1/&#x2B;1/&#x2B;1), tyv&#xE4;rr &#xF6;kar vikten med 20% (&#xF8FF;1,2). Om rustningsdelen &#xE4;r av metall &#xE4;r den dessutom f&#xF6;rtennad vilket f&#xF6;rhindrar rost.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Fysiska egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Extraordin&#xE4;rt bra utseende. Sl&#xE5; om PER med 2T6&#x2B;9. Blir resultatet s&#xE4;mre &#xE4;n vad PER varinnan, beh&#xE5;ll det gamla v&#xE4;rdet.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Mentala egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Vetgirig. Rollpersonen f&#xE5;r 2T6 enheter som kan anv&#xE4;ndas f&#xF6;r att h&#xF6;ja valfria kunskaps - f&#xE4;rdigheter. Ingen kunskapsf&#xE4;rdighet f&#xE5;r dock h&#xF6;jas &#xF6;ver tio (10) med dessa enheter.
                                            </dd>
                                    </dl>
                                </div>
        </div>);
    }
}

export default Tegol;