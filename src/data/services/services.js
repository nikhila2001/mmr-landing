import { IoShieldOutline  } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { LuKey } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";


const ServiceData = {
    services: [
        {
          id:"ss1",
          icon:  <IoShieldOutline size={28} />,
          title: "No Government Database Connection",
          text: "Your data stays with you, not in ABHA or any government database",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        },
        {
          id:"ss2",
          icon:<LuBuilding2 size={28}/>,
          title: "No Insurance Company Access",
          text:
            "Insurance companies cannot view or access your medical records",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        },
        {
          id:"ss3",
          icon:<IoLockClosedOutline size={28}/>,
          title: "256-bit Encryption",
          text:
            "Military-grade encryption keeps your data completely secure",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        },
        {
          id:"ss4",
          icon:<GoPerson size={28}/>,
          title: "You Own Your Data",
          text:
            "Complete ownership and control over your health information",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        },
        {
          id:"ss5",
          icon:<LuKey size={28}/>,
          title: "Share Only What You Choose",
          text:"Selective sharing - you decide what to share and with whom",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        },
        {
          id:"ss6",
          icon:<FaRegClock size={28}/>,
          title: "Time-limited Access Links",
          text:
            "Share temporary access that expires automatically",
          iconBackground:"linear-gradient(to right, #2b9fe8, #6cc4f0)"
        }
    ]
}
  export default ServiceData;