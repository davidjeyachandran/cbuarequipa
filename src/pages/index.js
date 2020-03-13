import React from 'react'
import Layout from 'components/Layout/index'
import HeroImage from 'components/HeroImage'
import SectionFeatures from 'components/IndexPage/components/SectionFeatures'
import BodyContainer from 'components/BodyContainer'

const index = () => {
  return (
    <Layout>
      <HeroImage
        textContent=""
        buttonText="Aprende más"
        textTitle="Comunidad Biblica Universitaria"
        textSubtitle="¿Quieres estudiar la Biblia con nosotros?"
        urlImage="assets/img/bg4.jpg"
      />
      <BodyContainer>
        <SectionFeatures />
      </BodyContainer>
    </Layout>
  )
}

export default index
