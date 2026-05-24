import { User, Mail, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const members = [
  {
    name: "Shalika Rakesh",
    designation: "Assistant Professor",
    department: "KIET School of Management",
    college: "KIET Deemed to be University",
    address: "Murad Nagar, Ghaziabad 201206",
    email: "shalika.rakesh@kiet.edu",
  },
  {
    name: "Dr. Nagmanee Kumar ",
    designation: "Assistant professor ",
    department: "Department of Sociology and Proctor",
    college: "Nalanda Mahila College, Biharsharf, Nalanda,  Patliputra University",
    address: "Patna (Bihar) India",
    email: "kumarmani@nalandamahilacollege.ac.in",
  },
  {
    name: "Anand Dwived",
    designation: "Senior Instructor ",
    department: "Department Name",
    college: "Abu Dhabi University",
    address: "City, State Pincode",
    email: "anand.dwivedi@adu.ac.ae",
  },
  {
    name: "Jagath Wellawatte",
    designation: "Senior Lecturer",
    department: "Department of Sociology",
    college: "University of Colombo",
    email: "jagath@soc.cmb.ac.lk",
  },
];

const EditorialMember = () => {
  return (
    <div className="pt-16">

      {/* Header */}
      <section className="bg-gradient-to-r from-academic-blue to-academic-blue-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Editorial Members
            </h1>
            <p className="text-xl text-gray-200">
              Meet the distinguished members of our Editorial Board
            </p>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {members.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <CardContent className="p-6">

                    {/* Top Row - Icon + Name */}
                    <div className="flex items-center space-x-4 mb-5">
                      <div className="w-16 h-16 bg-academic-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-academic-blue font-medium text-sm">
                          {member.designation}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="mb-4 border-gray-200" />

                    {/* Details */}
                    <div className="space-y-3">

                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-4 h-4 text-academic-blue mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800 font-medium text-sm">
                            {member.department}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {member.college}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {member.address}
                          </p>
                        </div>
                      </div>

                   <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-academic-blue flex-shrink-0" />
                        <span className="text-academic-blue text-sm break-all">
                        {member.email}
                        </span>
                    </div>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default EditorialMember;