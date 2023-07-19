import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import '../../App.css'

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              {/* <img alt="logo" width="30px" /> */}
              <span className="ml-3 h5 font-weight-bold">Mircle World</span>
            </a>
            <p className="my-3" style={{ width: '100%' }}>
              Mircle World(주) 사업자자번호:123-45-6789 : 제 1234- 서울시 노원구 /대표: 이왕원/ 통신판매업 신고번호 2022-서울-0194 전화번호 1234-1234(국번없이)<br/>
              사업제휴 및 업무관련 문의: MW_Al@gmail.com
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', display:'inline'}}>
              회사소개　　　
            </p>
            <p className="h5 mb-4" style={{ fontWeight: '600',display:'inline' }}>
              제휴문의　　　 
            </p>
            <p className="h5 mb-4" style={{ fontWeight: '600',display:'inline' }}>
              개인정보처리방침　　　
            </p>
                <p className="h5 mb-4" style={{ fontWeight: '600',display:'inline'}}>
              사업자정보공개사이트　　　
            </p>
        </CDBBox>
        {/* <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved.</small> */}
      </CDBBox>
    </CDBFooter>
  );
};