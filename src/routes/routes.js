import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import TremsToUse from "../components/trems/Mapaccordion";
import RigthSideBar from "../components/rightSidebar";
import Policy from "../pages/policy/Policy";
import Notes from "../pages/notes";
import TableCampo from "../components/table";
import Profile from "../pages/profile";
import MobileViewHeader from "../components/mobileViewHeader";
import UniversalDialogs from "../UniversalDialogs";
import EditPage from "../pages/editProfile";
import AccountSetting from "../pages/accountSetting";
import Privacy from "../pages/privacySetting";
import RichTextEditor from "../components/richText";
import BlankNotes from "../components/blankNotes";

const Routers = () => {
  return (
    <div>
      <Router>
        <MobileViewHeader />
        <UniversalDialogs />
        <RigthSideBar>
          {/* <Header /> */}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route exact path="/policy" element={<Policy />} />
            <Route exact path="/terms" element={<TremsToUse />} />
            <Route exact path="/table" element={<TableCampo />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/editProfile" element={<EditPage />} />
            <Route exact path="/accountSetting" element={<AccountSetting />} />
            <Route exact path="/privacySetting" element={<Privacy />} />
            <Route exact path="/bank-notes" element={<BlankNotes />} />
          </Routes>
          <Footer />
        </RigthSideBar>
      </Router>
    </div>
  );
};

export default Routers;
