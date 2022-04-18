import Head from "next/head"
import {Input} from "../../components/Form"
import {useState} from "react"
import {RadioGroup} from "@headlessui/react"
import {useRouter} from "next/router"
import Radio from "../../components/Radio"

export default function home() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [age, setAge] = useState("22")
  const [sex, setSex] = useState("0")
  const [trestbps, setTrestBps] = useState("94")
  const [cp, setCp] = useState("3")
  const [chol, setChol] = useState("")
  const [fbs, setFbs] = useState("0")
  const [restecg, setRestecg] = useState("0")
  const [thalach, setThalach] = useState("0")
  const [exang, setExang] = useState("0")
  const [slope, setSlope] = useState("0")
  const [ca, setCa] = useState("0")
  const [thal, setThal] = useState("0")
  const [oldpeak, setOldpeak] = useState("0")

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch("/api/cardiac", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: age,
        sex: sex,
        trestbps: trestbps,
        cp: cp,
        chol: chol,
        fbs: fbs,
        restecg: restecg,
        thalach: thalach,
        exang: exang,
        slope: slope,
        ca: ca,
        thal: thal,
        oldpeak: oldpeak
      })
    })
    const data = await res.json()
    const risk = data.risk
    const prediction_probability = data.prediction_probability
    router.push(
      {
        pathname: "/cardiac/result",
        query: {
          name,
          age,
          sex,
          trestbps,
          cp,
          chol,
          fbs,
          restecg,
          thalach,
          exang,
          slope,
          ca,
          thal,
          oldpeak,
          risk,
          prediction_probability
        }
      },
      `/cardiac/result/${name.toLowerCase()}`
    )
  }

  return (
    <div>
      <Head>
        <title>Cardiac Health Checkup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-5 pt-5">
        <div>
          <button
            onClick={() => router.push("/")}
            className="ml-4 mb-4 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60 print:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Go Back
          </button>
        </div>
        <div className="relative flex min-h-screen flex-col justify-center bg-gray-50">
          <div className="relative px-6 pt-10 pb-10">
            <div className="max-w-lg md:mx-auto">
              <form
                className="space-y-4"
                onSubmit={(e) => handleSubmit(e)}
                method="post">
                <p className="text-lg font-semibold">
                  All fields must be filled in without units
                </p>
                <Input
                  type="text"
                  pattern="^[A-Za-z ]+$"
                  onChange={(e) => setName(e.target.value)}
                  placeholder={"Please provide your name"}
                  className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
                />
                <Input
                  type="number"
                  min="0"
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={"Your age relative to birth date"}
                  className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
                />
                <Biologicalsex />
                <Chestpain />
                <Input
                  type="number"
                  min="0"
                  onChange={(e) => setTrestBps(e.target.value)}
                  placeholder={"Resting blood pressure (mm Hg)"}
                  className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
                />
                <Input
                  type="number"
                  min="0"
                  onChange={(e) => setChol(e.target.value)}
                  placeholder={"Serum cholestoral (mg/dl)"}
                  className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
                />
                <Bloodsugar />
                <ECGresult />
                <Input
                  type="number"
                  min="0"
                  onChange={(e) => setThalach(e.target.value)}
                  placeholder={"Maximum heart rate achieved (BPM)"}
                  className="flex h-10 w-full items-center rounded-md border-2 border-gray-200 px-4"
                />
                <Exangexercise />
                <div className="mt-2 select-none">
                  <label className="font-semibold">
                    Exercising ST Depression
                  </label>
                  <input
                    type="range"
                    step="0.01"
                    min="0"
                    max="10"
                    className="range"
                    onChange={(e) => setOldpeak(e.target.value)}
                    value={oldpeak}
                  />
                  {oldpeak}
                </div>
                <Anginaslope />
                <Coloredvessel />
                <Thalassemia />
                <button
                  type="submit"
                  className="rounded-md border-2 border-green-500 bg-white px-3 py-1 font-semibold tracking-wide hover:opacity-80">
                  Predict
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )

  function Thalassemia() {
    return (
      <Radio
        name0="Normal"
        name1="Fixed defect"
        name2="Reversable defect"
        label="Thalassemia level"
        onChange={setThal}
        value={thal}
      />
    )
  }

  function Coloredvessel() {
    return (
      <Radio
        name0="0"
        name1="1"
        name2="2"
        name3="3"
        label="Major vessels coloured by flourosopy"
        onChange={setCa}
        value={ca}
      />
    )
  }

  function Anginaslope() {
    return (
      <Radio
        name0="Upsloping"
        name1="Flat"
        name2="Downsloping"
        label="Peak exercise electrocardiographic slope"
        onChange={setSlope}
        value={slope}
      />
    )
  }

  function Exangexercise() {
    return (
      <Radio
        name0="False"
        name1="True"
        label="Chest pain (angina) after exercise"
        onChange={setExang}
        value={exang}
      />
    )
  }

  function ECGresult() {
    return (
      <Radio
        name0="Normal"
        name1="ST-T wave abnormality"
        name2="Probable/definite ventricular hypertrophy"
        label="Resting electrocardiographic results"
        onChange={setRestecg}
        value={restecg}
      />
    )
  }

  function Bloodsugar() {
    return (
      <Radio
        name0="False"
        name1="True"
        label="Fasting blood sugar > 120 mg/dl"
        onChange={setFbs}
        value={fbs}
      />
    )
  }

  function Chestpain() {
    return (
      <Radio
        name0="Typical angina"
        name1="Atypical angina"
        name2="Non-anginal pain"
        name3="Asymptomatic"
        label="Chest pain type"
        onChange={setCp}
        value={cp}
      />
    )
  }

  function Biologicalsex() {
    return (
      <Radio
        name0="Female"
        name1="Male"
        label="Chest pain type"
        onChange={setSex}
        value={sex}
      />
    )
  }
}
