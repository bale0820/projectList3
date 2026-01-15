// src/pages/delivery/DeliveryPage.jsx
import { DeliveryHero } from "features/delivery/components/DeliveryHero";
import "./Delivery.scss";
import { DeliveryHighlights } from "features/delivery/components/DeliveryHighlights";
import { DeliveryTable } from "features/delivery/components/DeliveryTable";
import { DeliveryMap } from "features/delivery/components/DeliveryMap";


export  function Delivery() {
  return (
    <div className="delivery-info">
      <DeliveryHero />
      <DeliveryHighlights />
      <DeliveryTable />
      <DeliveryMap />
    </div>
  );
}
