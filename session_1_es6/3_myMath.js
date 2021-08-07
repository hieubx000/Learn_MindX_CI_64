const getTriangleArea = (h, w) => {
        return (w * h) / 2;
    }
    // name export
export const getCircleArea = (r) => {
    return Math.PI * r ** 2;
};

// name export
export const solveQuadraticEquation = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        return null;
    } else if (delta === 0) {
        return -b / (2 * a);
    } else {
        return {
            x1: (-b + Math.sqrt(delta)) / (2 * a),
            x2: (-b - Math.sqrt(delta)) / (2 * a)
        };
    }
};

const solveLinearEquation = (a, b) => {
    return -b / a;
};

const MyMath = {
    getTriangleArea: getTriangleArea,
    getCircleArea: getCircleArea,
    solveQuadraticEquation: solveQuadraticEquation,
    solveLinearEquation: solveLinearEquation,
};

export default MyMath;