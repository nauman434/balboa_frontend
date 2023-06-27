import React from 'react';
import styles from '../style';
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} bg-section `}>
        <h1 className='ss:text-[48px] text-[24px] text-start  font-tinos font-semibold mb-5'>Privacy Policy</h1>
        <p className='leading-8'><span className='font-semibold'>Use of information and materials</span><br/>The information and materials contained in these pages, and the terms, conditions, and descriptions that appear, are subject to change. Unauthorized use of Balboa Trade & Shipping’s website and systems including but not limited to unauthorized entry into Balboa Trade & Shipping’s systems, misuse of passwords, or misuse of any information posted on a site is strictly prohibited. Not all products and services are available in all geographic areas. Your eligibility for particular products and services is subject to final determination by Balboa Trade & Shipping and/or its affiliates. Investment services are not bank deposits or insured by any entity, and are subject to investment risks, including possible loss of principal amount invested. <br /><br /><span className='font-semibold'>Links</span> <br />This site may contain links to web sites controlled or offered by third parties (non-affiliates of Balboa Trade & Shipping). Balboa Trade & Shipping hereby disclaims liability for, any information, materials, products or services posted or offered at any of the third party sites linked to this web site. By creating a link to a third party web site, Balboa Trade & Shipping does not endorse or recommend any products or services offered or information contained at that web site, nor is Balboa Trade & Shipping liable for any failure of products or services offered or advertised at those sites. Such third party may have a privacy policy different from that of Balboa Trade & Shipping and the third party website may provide less security than the Balboa Trade & Shipping site. <br /><br /><span className='font-semibold'>Submissions</span> <br />All information submitted to Balboa Trade & Shipping via this site shall be deemed and remain the property of Balboa Trade & Shipping and Balboa Trade & Shipping shall be free to use, for any purpose, any idea, concepts, know-how or techniques contained in information a visitor to this site provides Balboa Trade & Shipping through this site. Balboa Trade & Shipping shall not be subject to any obligations of confidentiality regarding submitted information except as agreed by the Balboa Trade & Shipping entity having the direct customer relationship or as otherwise specifically agreed or required by law.</p>
    </section>
  )
}

export default Privacy