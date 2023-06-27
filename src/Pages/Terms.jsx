import React from "react";
import styles from "../style";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} bg-section `}>
      <h1 className="ss:text-[48px] text-[24px] text-start  font-tinos font-semibold mb-5">
      Terms of Services
      </h1>
      <p className="leading-8">
        <span className="font-semibold">Notice</span>
        <br />
        Please read these terms and conditions carefully. By accessing this site
        and any pages thereof, you agree to be bound by the terms and conditions
        below. If you do not agree to the terms and conditions below, do not
        access this site, or any pages thereof. <br />
        <br />
        <span className="font-semibold">
          Copyright © Balboa Trade & Shipping 2022. All right Reserved
        </span>{" "}
        <br />
        Copyright in the pages and in the screens displaying the pages, and in
        the information and material therein and in their arrangement, is owned
        by Balboa Trade & Shipping unless otherwise indicated. <br />
        <br />
        <span className="font-semibold">No warranty</span> <br />
        The information and materials contained in this site, including text,
        graphics, links or other items are provided “as is”, “as available”.
        Balboa Trade & Shipping does not warrant the accuracy, adequacy or
        completeness of this information and materials and expressly disclaims
        liability for errors or omissions in this information and materials. No
        warranty of any kind, implied, expressed or statutory including but not
        limited to the warranties of non-infringement of third party rights,
        title, merchantability, fitness for a particular purpose and freedom
        from computer virus, is given in conjunction with the information and
        materials. <br />
        <br />
        <span className="font-semibold">Limitation of liability</span>
        <br />
        In no event will Balboa Trade & Shipping be liable for any damages,
        including without limitation direct or indirect, special, incidental, or
        consequential damages, losses or expenses arising in connection with
        this site or any linked site or use thereof or inability to use by any
        party, or in connection with any failure of performance, error,
        omission, interruption, defect, delay in operation or transmission,
        computer virus or line or system failure, even if Balboa Trade &
        Shipping, or representatives thereof, are advised of the possibility of
        such damages, losses or expenses. <br />
        <br />
        <span className="font-semibold">Availability</span> <br />
        This site is not intended for distribution to, or use by, any person or
        entity in any jurisdiction or country where such distribution or use
        would be contrary to local law or regulation. <br />
        <br />
        <span className="font-semibold">Additional terms</span> <br />
        Certain sections or pages on this site may contain separate terms and
        conditions, which are in addition to these terms and conditions. In the
        event of a conflict, the additional terms and conditions will govern for
        those sections or pages.<br />
        <br />
        <span className="font-semibold">Governing law</span> <br />
        Use of this site shall be governed by the United States of America.
      </p>
    </section>
  );
};

export default Terms;
