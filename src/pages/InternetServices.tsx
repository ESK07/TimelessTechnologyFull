import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function InternetServices() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
          INTERNET SERVICES
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          The internet has become the centre of most exchanges across social,
          business, educational, commercial, and financial fronts. Our purpose
          is to promote its reach and availability to many.
        </p>

        {/* Fibre Optic Section */}
        <Card className="mb-10">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-green-700">
              Fibre Optic Cable
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Fibre Optic Cable is a transmission technology which uses light pulses along carefully drawn glass or plastic strands about the diameter of a human hair. This technology was selected and designed to transmit data efficiently due to its ability to reflect light. It delivers high bandwidth, electromagnetic immunity and low signal loss.
            </p>
            <p>
             Fibre optic is used to transmit data, voice and images. The technology does not carry a current making it safer to use as it cannot generate a spark. This efficient technology has in some cases replaced use of technologies like copper. The technology is ideal for areas in close proximity to it, a large amounts of data at high speeds are required for quick decision making, streaming and in applications which require very low latency.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Why Choose Fibre Optic?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Businesses needing high-performing, reliable internet</li>
              <li>Those requiring consistent upload and download speeds</li>
              <li>Organizations prioritizing Quality of Service (QoS)</li>
              <li>
                Companies that rely on uninterrupted file transfers, streaming,
                and cloud connectivity
              </li>
            </ul>

            <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white">
              Order Dedicated Internet
            </Button>
          </CardContent>
        </Card>

        {/* Shared Internet Section */}
        <Card className="mb-10">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-green-700">
              Shared Internet Access Package
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Shared internet allows users to share facilities to save costs —
              similar to a community broadband model. A number of customers
              access one internet connection, and the cost is shared between
              them.
            </p>
            <p>
              The service is delivered on a{" "}
              <strong>best-effort basis</strong>, meaning the provider strives
              to offer smooth connectivity but cannot guarantee performance or
              quick response during outages.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Who Should Use Shared Internet?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Businesses not heavily dependent on the internet</li>
              <li>Where cost is a key consideration</li>
              <li>
                Companies whose peak usage differs from other users in the area
              </li>
              <li>Those that can tolerate fluctuating performance</li>
            </ul>

            <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white">
              Order Shared Internet
            </Button>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
            Package Comparison
          </h2>
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Characteristic</th>
                <th className="py-3 px-4 text-left">Dedicated Internet Access</th>
                <th className="py-3 px-4 text-left">Shared Internet Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="py-3 px-4 font-medium">Speed</td>
                <td className="py-3 px-4">Guaranteed Speed</td>
                <td className="py-3 px-4">
                  Downgraded during peak hours when neighbours are using it
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Quality</td>
                <td className="py-3 px-4">Guaranteed quality</td>
                <td className="py-3 px-4">No guarantees with a shared network</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reliability</td>
                <td className="py-3 px-4">
                  Offers static IPs and stable connections
                </td>
                <td className="py-3 px-4">
                  May lack static IPs, less reliable
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reparability</td>
                <td className="py-3 px-4">Quick fault response</td>
                <td className="py-3 px-4">
                  Often longer response times for repairs
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Clarity</td>
                <td className="py-3 px-4">Crystal clear voice and video</td>
                <td className="py-3 px-4">
                  Can experience latency and jitters
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Cost</td>
                <td className="py-3 px-4">Higher</td>
                <td className="py-3 px-4">Lower</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
