import * as tf from "@tensorflow/tfjs"

const TARGET_CLASSES = {
	0: "Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowen’s disease)",
	1: "Basal Cell Carcinoma",
	2: "Benign Keratosis",
	3: "Dermatofibroma",
	4: "Melanoma",
	5: "Melanocytic Nevi",
	6: "Vascular skin lesion"
}
export const predict = async (imageFileRef, model) => {
	// Pre-process the image
	let tensor = tf.browser
		.fromPixels(imageFileRef)
		.resizeNearestNeighbor([224, 224])
		.toFloat()

	let offset = tf.scalar(127.5)

	tensor = tensor.sub(offset).div(offset).expandDims()

	let predictions = await model.predict(tensor).data()

	let top3 = Array.from(predictions)
		.map(function (p, i) {
			// this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			}
		})
		.sort(function (a, b) {
			return b.probability - a.probability
		})
		.slice(0, 3)

	console.log(top3)
	return top3
}
