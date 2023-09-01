
const Footer = () => {
    return (
        <footer className="mx-auto max-w-[2560px] ">
        <ul>
          <li>
            <h1>Каталог</h1>
            <div className="footerLinks">
              <a href="#">
                <p>Продукция</p>
              </a>
              <a href="#">
                <p>Производство</p>
              </a>
              <a href="#">
                <p>Услуги</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Клиентам</h1>
            <div className="footerLinks">
              <a href="#">
                <p>О компании</p>
              </a>
              <a href="#">
                <p>Новости</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Документы</h1>
            <div className="footerLinks">
              <a href="#">
                <p>Сертификат</p>
              </a>
              <a href="#">
                <p>Награды</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Контакты</h1>
            <div className="footerLinks">
              <a href="tel:+998910130013"
                ><img src="/icons/phone.png" alt="" />
                <p>+998 91 013 00 13</p>
              </a>
              <a href="mailto:"
                ><img src="/icons/mail.png" alt="" />
                <p>oxriverconstruction@info.com</p>
              </a>
              <a href="https://yandex.uz/maps/-/CCUOjBx~2B"
                ><img src="/icons/marker.png" alt="" />
                <p>г.Ташкент</p>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    );
};

export default Footer;