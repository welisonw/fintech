import { NavLink } from "react-router-dom";
import { FintechSVG } from "../assets/FintechSVG";
import styles from "./SideNav.module.css";
import summary from "../assets/icons/resumo.svg";
import sales from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import settings from "../assets/icons/configuracoes.svg";
import contact from "../assets/icons/contato.svg";
import exit from "../assets/icons/sair.svg";

export const SideNav = () => {
  return (
    <nav className={styles.sidenav}>
      <FintechSVG title="Fintech Logo" />
      <ul>  
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="" />
          </span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={exit} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  );
};
