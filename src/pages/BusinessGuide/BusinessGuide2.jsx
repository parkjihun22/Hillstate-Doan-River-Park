import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "공급안내", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // 이미지가 화면에 보이는지 체크 (예시)
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>힐스테이트 도안리버파크 - 분양일정</title>
        <meta
          name="description"
          content="힐스테이트 도안리버파크의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요.
"
        />
        <meta
          name="keywords"
          content="힐스테이트 도안리버파크, 힐스테이트 도안리버파크모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.marvelpartners.co.kr/BusinessGuide/plan"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="힐스테이트 도안리버파크 - 분양일정"
        />
        <meta
          property="og:description"
          content="힐스테이트 도안리버파크의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요.
"
        />
        <meta
          property="og:image"
          content="https://www.marvelpartners.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.marvelpartners.co.kr/BusinessGuide/plan"
        />
        <meta property="og:site_name" content="힐스테이트 도안리버파크" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="힐스테이트 도안리버파크 - 분양일정"
        />
        <meta
          name="twitter:description"
          content="힐스테이트 도안리버파크의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.marvelpartners.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.marvelpartners.co.kr/BusinessGuide/plan"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "힐스테이트 도안리버파크 - 분양일정",
											"description": "힐스테이트 도안리버파크의 최신 분양일정을 확인하세요. 청약 일정, 분양 절차, 주요 조건을 명확히 안내하여 분양 준비에 필요한 정보를 제공합니다. 평택에서 새로운 라이프스타일을 시작할 기회를 놓치지 마세요. 힐스테이트의 고급스러운 주거공간에서 미래를 계획해보세요.",
											"url": "https://www.marvelpartners.co.kr/BusinessGuide/plan"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크 - 분양일정
      </h1>
      <p className={styles.screenReaderOnly}>
        힐스테이트 도안리버파크의 분양 일정은 중요한 날짜들을 안내하는 핵심
        정보입니다. 입주 희망자들에게 분양 일정과 함께 주요 일정 변경 사항을
        실시간으로 제공합니다. 정확한 분양 일정을 확인하고, 청약 준비를 미리
        진행할 수 있도록 도와줍니다. 분양 공고를 통해 추가 정보와 분양 조건을
        확인해보세요.
      </p>

      <div className={styles.textBox}>
        <div>대전의 눈부신 가치 위에</div>
        <div>힐스테이트 도안리버파크의 새로운 자부심으로 찾아옵니다.</div>
      </div>

			<img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="힐스테이트 도안리버파크 분양일정안내-image1" />


      <Footer />
    </div>
  );
};

export default BusinessGuide2;
