

export const kelvinToCelsius = (temp, temp_min, temp_max) => {

    return [temp, temp_min, temp_max].map(i => (i - 273.15))
}
