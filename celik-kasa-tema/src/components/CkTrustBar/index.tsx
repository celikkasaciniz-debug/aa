import { Props } from "./types";
import {
  ShieldCheckSVG,
  TruckSVG,
  WrenchSVG,
  RefreshSVG,
} from "../../sub-components/icons";

export function CkTrustBar({
  item1Title,
  item1Text,
  item2Title,
  item2Text,
  item3Title,
  item3Text,
  item4Title,
  item4Text,
}: Props) {
  const items = [
    { Icon: WrenchSVG, title: item1Title, text: item1Text },
    { Icon: TruckSVG, title: item2Title, text: item2Text },
    { Icon: RefreshSVG, title: item3Title, text: item3Text },
    { Icon: ShieldCheckSVG, title: item4Title, text: item4Text },
  ].filter((item) => item.title);

  if (items.length === 0) return null;

  return (
    <section className="ck-trust">
      <div className="kombos-container">
        <ul className="ck-trust__list">
          {items.map(({ Icon, title, text }, i) => (
            <li className="ck-trust__item" key={i}>
              <span className="ck-trust__icon">
                <Icon />
              </span>
              <span className="ck-trust__body">
                <span className="ck-trust__title text-sm-semibold md:text-md-semibold">{title}</span>
                {text && <span className="ck-trust__text text-xs-regular md:text-sm-regular">{text}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CkTrustBar;
