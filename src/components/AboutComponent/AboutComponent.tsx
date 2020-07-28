import React from 'react'
import './AboutComponent.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";

const About: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="about">
            <Helmet>
                <title>CConverter - About Project</title>
            </Helmet>

            <div className="about-layout">
                <div className="about-layout__item">
                    <div className="about-layout__info">
                        <p>{t('AboutFirstPhotoFirstParagraph')}</p>
                        <p>{t('AboutFirstPhotoSecondParagraph')}</p>
                    </div>

                    <div className="about-layout__foto dollar-foto"/>

                </div>
                <div className="about-layout__item">
                    <div className="about-layout__foto bank-foto"/>

                    <div className="about-layout__info">
                        <p>{t('AboutSecondPhotoFirstParagraph')}</p>
                    </div>
                </div>

                <div className="about-layout__item">
                    <div className="about-layout__info">
                        <p>{t('AboutThirdPhotoFirstParagraph')}</p>
                        <p>{t('AboutThirdPhotoSecondParagraph')}</p>
                    </div>

                    <div className="about-layout__foto rwd-foto"/>

                </div>
            </div>
        </div>
    )
}

export default About
