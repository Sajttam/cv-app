import React from 'react';
import '../../index.css';
import '../../projects.css';
import DiceComponent from '../DiceComponent';

function Notes() {
    return <div>
        <h5>Pengar</h5>
            2560 silver

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
            Stridssvärd
            </td>
            <td>
            H+Ob2T6+1
            </td>
            <td>
            K+2
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

        <p/>Kokutrustning: Bestående av ett kokkärl (0,3 kg), en bit ståltråd, trätallrik (0,2 kg), träsked, liten kniv, saltkar och samt ett enkelt dryckeskärl (0,1 kg). Fullständig vikt: 0,6 kg.

        <p/>Lägerutrustning: Ett tygtält för två personer (5,0 kg), en lykta med en halv liter lampolja (1,0 kg), två rejäla filtar (1,6 kg), fem meter snöre (0,1 kg), en liten kittel med tillhörande trefot och kedja (1,0 kg), en träslev och en vattensäck (tio liter; 1,5 kg) för att hämta vatten. Fullständig vikt: 10,2 kg.

        <p/>Jaktutrustning: Bestående av ett dussin snaror (0,1 kg), diverse lockbeten, jakthorn (0,5 kg), slaktkniv (0,2 kg) och en kortbåge (0,9 kg) eller kastspjut (0,6 kg). Fullständig vikt: 2,3 kg med tillägg för lockbeten.
    </div>;
}

class Griff extends React.Component {
    render() {
        return (<div><DiceComponent />
        <h1>Gycklaren Griff</h1>

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
                        Gycklaren Griff
                    </td>
                </tr>
                <tr>
                    <td>
                        Yrke
                    </td>
                    <td class="dataEntry">
                        Gyklare
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
                        176 cm
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
                        71 kg
                    </td>
                </tr>
                <tr>
                    <td>
                        &#xC5;lder
                    </td>
                    <td class="dataEntry">
                        28
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
                        11
                    </td>
                </tr>
                <tr>
                    <td>
                        T&#xE5;lighet
                    </td>
                    <td class="dataEntry">
                        11
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
                        22
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
                        12
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
                        7
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
                        Nina Olsson
                    </td>
                </tr>
                <tr>
                    <td>
                        Lojalitet
                    </td>
                    <td class="dataEntry">
                        10
                    </td>
                </tr>
                <tr>
                    <td>
                        Heder
                    </td>
                    <td class="dataEntry">
                        9
                    </td>
                </tr>
                <tr>
                    <td>
                        Amor
                    </td>
                    <td class="dataEntry">
                        5
                    </td>
                </tr>
                <tr>
                    <td>
                        Aggresion
                    </td>
                    <td class="dataEntry">
                        11
                    </td>
                </tr>
                <tr>
                    <td>
                        Tro
                    </td>
                    <td class="dataEntry">
                        6
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
                        8
                    </td>
                    <td>
                        Insikt
                    </td>
                    <td class="dataEntry">
                        8
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
                                8 m/r
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Spr&#xE5;ng
                            </th>
                            <th class="dataEntry">
                                16 m/r
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Spurt
                            </th>
                            <th class="dataEntry">
                                24 m/r
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
                                Ob1T6
                            </td>
                            <td class="dataEntry">
                                Ob1T6
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
                                    12
                                </td>
                            </tr>
                </table>
                <h5>Rörelsefärdigheter</h5>
                <table>
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
                                        Kl&#xE4;ttra
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
                                        G&#xF6;mma
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
                                        Akrobatik
                                    </td>
                                    <td class="dataEntry">
                                        10
                                    </td>
                                </tr>
                    </table>
                    <h5>Kunskapsfärdigheter</h5>
                    <table>
                                    <tr>
                                        <td>
                                            Historia
                                        </td>
                                        <td class="dataEntry">
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Kulturk&#xE4;nnedom
                                        </td>
                                        <td class="dataEntry">
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Boskapssk&#xF6;tsel
                                        </td>
                                        <td class="dataEntry">
                                            9
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
                                            Musik
                                        </td>
                                        <td class="dataEntry">
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ockultism
                                        </td>
                                        <td class="dataEntry">
                                            12
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            V&#xE4;rdera
                                        </td>
                                        <td class="dataEntry">
                                            6
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            V&#xE4;xtl&#xE4;ra
                                        </td>
                                        <td class="dataEntry">
                                            9
                                        </td>
                                    </tr>
                        </table>
                        <h5>Vildmarksfärdigheter</h5>
                        <table>
                                        <tr>
                                            <td>
                                                S&#xF6;ka
                                            </td>
                                            <td class="dataEntry">
                                                5
                                            </td>
                                        </tr>
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
                                                9
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
                                                Speja
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
                            </table>
                        </div><div>
                            <h5>Sociala färdigheter</h5>
                            <table>
                                            <tr>
                                                <td>
                                                    F&#xF6;rh&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    F&#xF6;rkl&#xE4;dnad
                                                </td>
                                                <td class="dataEntry">
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Gyckla
                                                </td>
                                                <td class="dataEntry">
                                                    13
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Handel
                                                </td>
                                                <td class="dataEntry">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ledarskap
                                                </td>
                                                <td class="dataEntry">
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sk&#xE5;despel
                                                </td>
                                                <td class="dataEntry">
                                                    14
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
                                                    F&#xF6;rf&#xF6;ra
                                                </td>
                                                <td class="dataEntry">
                                                    8
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
                                                    Undervisning
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
                                                    15
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Sjunga
                                                </td>
                                                <td class="dataEntry">
                                                    14
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
                                                            Transformering
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
                                                                Dolk
                                                            </td>
                                                            <td class="dataEntry">
                                                                5
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Armborst
                                                            </td>
                                                            <td class="dataEntry">
                                                                15
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
                                                                15
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
                                                F&#xF6;rr&#xE4;dare. Rollpersonen &#xE4;r en f&#xF6;rr&#xE4;dare p&#xE5; n&#xE5;gotT s&#xE4;tt. Rollpersonen kan ha f&#xF6;rr&#xE5;tt sin familj, sinherre eller n&#xE5;gon ideologi. Detta har f&#xE5;tt dennesforna v&#xE4;nner att ogilla och rollpersonen &#xE4;rf&#xF6;rskjuten fr&#xE5;n sin forna gemenskap.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Familj
                                            </dt>
                                            <dd class="col-sm-10">
                                                Familjen &#xE4;r mycket rik. Sl&#xE5; ett gratis slag p&#xE5; tabellen f&#xF6;r F&#xF6;rm&#xF6;genhet och ett p&#xE5; Egendom. Observera att det &#xE4;r familjen som &#xE4;ger egen - domen, men rollpersonen &#xE4;ger den framslagna f&#xF6;rm&#xF6;genheten.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Familj
                                            </dt>
                                            <dd class="col-sm-10">
                                                Familjen &#xE4;r mycket rik. Sl&#xE5; ett gratis slag p&#xE5; tabellen f&#xF6;r F&#xF6;rm&#xF6;genhet och ett p&#xE5; Egendom. Observera att det &#xE4;r familjen som &#xE4;ger egen - domen, men rollpersonen &#xE4;ger den framslagna f&#xF6;rm&#xF6;genheten.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Nackdelar
                                            </dt>
                                            <dd class="col-sm-10">
                                                Skallig. Rollpersonen har inget h&#xE5;r p&#xE5; huvudet,detta slag g&#xE4;ller &#xE4;ven f&#xF6;r kvinnor.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Mentala egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Stridsvan. Rollpersonens sinne tycks vara naturligt lagt till analyserandet av strid. Han kan ofta f&#xF6;rutse sina motst&#xE5;ndares r&#xF6;relser innan de utf&#xF6;rt dem och kan p&#xE5; se s&#xE4;tt ha ett stort &#xF6;vertag. Anv&#xE4;nd 2T6 enheter f&#xF6;r att h&#xF6;ja Stridsvana. F&#xE4;rdigheten r&#xE4;knas som L&#xE4;ttl&#xE4;rd.
                                            </dd>
                                            <dt class="col-sm-2">
                                                F&#xF6;rm&#xF6;genhet
                                            </dt>
                                            <dd class="col-sm-10">
                                                Ob3T6 * 20 silver.
                                            </dd>
                                            <dt class="col-sm-2">
                                                Fysiska egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Friskt blod. Rollpersonen f&#xE5;r en extra kolumnp&#xE5; Blodf&#xF6;rlust i Skadesektionen (dock inte fler&#xE4;n tio kolumner).
                                            </dd>
                                            <dt class="col-sm-2">
                                                Fysiska egenskaper
                                            </dt>
                                            <dd class="col-sm-10">
                                                Skadet&#xE5;lig. Rollpersonen f&#xE5;r en extra kolumnp&#xE5; Trauma under Skadesektionen (dock intefler &#xE4;n tio kolumner).
                                            </dd>
                                    </dl>
                                </div></div>);
    }
}

export default Griff;