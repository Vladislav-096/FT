import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/Main.page";
import { BenefitsPage } from "../../pages/BenefitsPage/BenefitsPage";
import { TariffsPage } from "../../pages/TariffsPage/TariffsPage";
import { PromotionsPage } from "../../pages/PromotionsPage/PromotionsPage";
import { PromoTafiffPage } from "../../pages/PromoTariffsPage/PromoTariffPage";
import { ESimPage } from "../../pages/ESimPage/ESimPage";
import { SubsctiptionPage } from "../../pages/SubscriptionPage/SubscriptionPage";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/tariffs" element={<TariffsPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/promotariff" element={<PromoTafiffPage />} />
        <Route path="/esim" element={<ESimPage />} />
        <Route path="/subscription" element={<SubsctiptionPage />} />
      </Routes>
    </main>
  );
};
