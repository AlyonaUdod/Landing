import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Images from './Images';
import mans_photo from './img/man_1.png';
import mans_photo_2 from './img/man_2.png';
import left_arrow from './img/chevron-sign-left.svg';
import right_arrow from './img/chevron-sign-to-right.svg';
import styles from './Aktuelles.module.css';

class Aktuelles extends Component{

    state = {
        count: 0,
        slide: document.body.clientWidth < 768 ? Images[0].src[0] : document.body.clientWidth > 768 && document.body.clientWidth < 1280 ? Images[0].src[1] : Images[0].src[2]
    };

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    nextSlide = () => { 
        if(this.state.count < 4){
            this.setState(prev=>({
                count: prev.count+1,
                slide: document.body.clientWidth < 768 ? Images[prev.count+1].src[0] : document.body.clientWidth > 768 && document.body.clientWidth < 1280 ? Images[prev.count+1].src[1] : Images[prev.count+1].src[2]
            }))
        } else {
            this.setState({
                count: 0,
                slide: document.body.clientWidth < 768 ? Images[0].src[0] : document.body.clientWidth > 768 && document.body.clientWidth < 1280 ? Images[0].src[1] : Images[0].src[2]
            })
        }
    }

    prevSlide = () => {

        if(this.state.count > 0){
            this.setState(prev=>({
                count: prev.count-1,
                slide: document.body.clientWidth < 768 ? Images[prev.count-1].src[0] : document.body.clientWidth > 768 && document.body.clientWidth < 1280 ? Images[prev.count-1].src[1] : Images[prev.count-1].src[2]
            }))
        } else {
            this.setState({
                count: 4,
                slide: document.body.clientWidth < 768 ? Images[4].src[0] : document.body.clientWidth > 768 && document.body.clientWidth < 1280 ? Images[4].src[1] : Images[4].src[2]
            })
        }
    }

    render() {
        const {slide} = this.state
    return (
        <React.Fragment>
        <div className={styles.actuelles}>
            <div className={styles.biografie}>
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={700} isVisible={true}>
                <div className={styles.img}>
                    <img src={mans_photo} className={styles.photo} alt="Prof. Dr. Jochem Müller_1"/>
                </div>
            </Animated>
                <div className={styles.info}>
                <h3>Biografie</h3>
                    <p> 
                    Prof. Dr. Jochem Müller wurde 1964 in Oberrodach / Bayern geboren.
                    Das Geburtsjahr war nach dem chinesischen Horoskop das Jahr des
                    DrachensiDer Drache ist in China eines der stärksten Glückssymbole
                    überhauptMenschen, die im Zeichen des Drachen geboren sind, sind
                    gesund, energiegeiaden und rünrungssiark.
                    Er studierte von 1982 bis 1986 Betriebswirtschaftslehre an der
                    Fachhochschule Coburg. Studienschwerpunkte: Organisation und
                    Datenverarbeitung (Prof. Dr. Winkler) und Rechnungswesen
                    (Prof. Dr. Kalweit)
                    Hachbegabieniörderung der Bayerischen Staatsregierung und
                    Stipendiat der HannsaSeidelaStiftung.
                    </p>
                </div>
            </div>
        </div>
        
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1500} isVisible={true}>
            
        <div className={styles.slider} style={{backgroundImage:`linear-gradient(rgba(255,255,255,0.3),rgba(155,155,155, 0.3)), url(${slide})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className={styles.arrowWrap}>
                <img className={styles.arrow} alt='previos_picture' src={left_arrow} onClick={this.prevSlide}/>
                <img className={styles.arrow} alt='next_picture' src={right_arrow} onClick={this.nextSlide}/>
            </div>
        </div>

        </Animated>
     
        <div className={styles.actuelles}>
            <div className={styles.priese}>
                <div className={styles.info}>
                <h3>Preise</h3>
                    <ul>
                        <li>11/2008 Verleihung "Zertifikat Dozent für Weiterbildung an Hochschulen"</li>
                        <li>2010 Gründung des MBAesmdienganges "Kreatives Marketing Management"</li>
                        <li>2010 Leitung des ESFrForschungsproiektes TINA</li>
                        <li>2011 Leitung des Transferzentrums für Innovation und Nachhaltigkeit (TINA)</li>
                    </ul>
                </div>
                {/* <div className={styles.img}> */}
                <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={700} isVisible={true}>
                    <img src={mans_photo_2} className={styles.photo2} alt="Prof. Dr. Jochem Müller_2"/>
                </Animated>
                {/* </div> */}
            </div>
        </div>
        </React.Fragment>
        );
    };
};

export default Aktuelles;