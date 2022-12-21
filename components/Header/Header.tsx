import { Icon } from "components/Icon/Icon";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "nmgix-components/src";
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();

  const headerSubtitle = router.locale === "ru" ? "с 2020г" : "since 2020";

  return (
    <header className={styles.header}>
      <Head>
        <title>NMGIX</title>
      </Head>
      <div className={styles.hero}>
        <Link href={"/"}>
          <h3>NMGIX</h3>
        </Link>
        <div className={styles.controls}>
          <span>{headerSubtitle}</span>
          <Button border={false} onClick={() => router.push("/", undefined, { locale: "ru" })} size='s'>
            <Image
              src={"/icons/russian-flag.svg"}
              width={27}
              height={15}
              alt={"Russian flag icon to navigate to russian translate page"}
              draggable={false}
            />
          </Button>
          <Button border={false} onClick={() => router.push("/", undefined, { locale: "en" })} size='s'>
            <Image
              src={"/icons/american-flag.svg"}
              width={27}
              height={15}
              alt={"American flag icon to navigate to american translate page"}
              draggable={false}
            />
          </Button>
        </div>
      </div>
      <div className={styles.settings}>
        {/* <Button border={false} onClick={() => {}} size='s'>
          <Icon icon='gear' width={30} height={30} />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
