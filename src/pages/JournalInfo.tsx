import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  BookOpen,
  Calendar,
  Globe,
  Languages,
  ShieldCheck,
  FileText,
  Building2,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const JournalInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-blue-900 to-indigo-800">
        <div className="container mx-auto px-6 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-blue-100 border border-white/20 mb-6">
            Academic Research Publication
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Journal Information
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Complete publication details, journal policies,
            peer review process and publisher information of
            Narayan Research Journal.
          </p>

        </div>
      </section>

      {/* QUICK STATS */}

      <section className="relative -mt-12 mb-10">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-700">
                ISSN
              </h3>
              <p className="text-gray-600 mt-2">
                Applied / Awaited
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-green-700">
                Open
              </h3>
              <p className="text-gray-600 mt-2">
                Open Access
              </p>
            </div>

            {/* <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-700">
                Peer Review
              </h3>
              <p className="text-gray-600 mt-2">
                Double Blind
              </p>
            </div> */}

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-700">
                4
              </h3>
              <p className="text-gray-600 mt-2">
                Issues / Year
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* JOURNAL OVERVIEW */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold text-slate-800 mb-8">
            Journal Overview
          </h2>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <p className="text-lg text-gray-700 leading-8">
              Narayan Research Journal is an international,
              peer-reviewed and open-access scholarly journal
              committed to publishing high-quality original
              research articles, review papers, case studies,
              and innovative academic contributions from diverse
              disciplines. The journal promotes interdisciplinary
              research and provides a platform for researchers,
              academicians, scholars, and professionals to
              disseminate knowledge globally.
            </p>

          </div>

        </div>
      </section>

      {/* PUBLICATION DETAILS */}

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold text-slate-800 mb-8">
            Publication Information
          </h2>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

            <table className="w-full">

              <tbody>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Journal Title
                  </td>
                  <td className="p-5">
                    Synergy: International Journal of Advanced Research Studies
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Starting Year
                  </td>
                  <td className="p-5">
                    2026
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Publication Frequency
                  </td>
                  <td className="p-5">
                     Quarterly 
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Publication Format
                  </td>
                  <td className="p-5">
                    Online
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Language
                  </td>
                  <td className="p-5">
                    Multiple languages
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Subject Area
                  </td>
                  <td className="p-5">
                    Multidisciplinary Subjects
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Publisher's Name 
                  </td>
                  <td className="p-5">
                    Narayan Research and Education
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                     Address
                  </td>
                  <td className="p-5">
Vill- Bhojpur Khatal, Near Shakti Market, Bhuli Nagar, Dharjori, P.O. Shramik Nagar, Dhanbad – 828104, Jharkhand, India.
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="p-5 font-semibold">
                    Accessibility
                  </td>
                  <td className="p-5">
                    Open Access
                  </td>
                </tr>

                <tr>
                  <td className="p-5 font-semibold">
                    ISSN
                  </td>
                  <td className="p-5">
                    Applied / Awaited
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </section>

 {/* PUBLISHER DECLARATION */}

<div className="flex justify-center mt-8">
  <div className="max-w-3xl bg-blue-50 border border-blue-200 rounded-2xl shadow-md px-6 py-5 text-center">
    <h3 className="text-lg font-semibold text-slate-800 mb-2">
      Publisher Declaration
    </h3>

    <p className="text-gray-700 leading-7">
      <strong>SIJARS (Synergy International Journal of Advanced Research Studies) </strong>
       is published by <strong>Narayan Research and Education</strong>, an individual
      publisher.
    </p>
  </div>
</div>

      {/* FEATURES */}

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl font-bold mb-10">
            Journal Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow p-6">
              <ShieldCheck className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Peer Reviewed
              </h3>
              <p className="text-gray-600">
                Double blind peer review process ensuring
                quality and academic integrity.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <Globe className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                International Reach
              </h3>
              <p className="text-gray-600">
                Welcomes contributions from researchers
                across the world.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <BadgeCheck className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-3">
                Open Access
              </h3>
              <p className="text-gray-600">
                Free and unrestricted access to all
                published articles.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PUBLISHER & CONTACT */}

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Publisher Information
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <Building2 className="text-blue-700" />
                  <p>Narayan Research Foundation</p>
                </div>

                <div className="flex gap-4">
                  <BookOpen className="text-blue-700" />
                  <p>Academic Research Publisher</p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <Phone className="text-blue-700" />
                  <p> 7480979566 / 7250913161  </p>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-blue-700" />
                  <p>editornarayanaresearch@gmail.com, <br /> narayanresearchandeducation@gmail.com</p>
                </div>

                <div className="flex gap-4">
                  <Globe className="text-blue-700" />
                  <p>narayanresearch.in</p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-blue-700" />
                  <p>
                    Dhanbad Jharkhand, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JournalInfo;