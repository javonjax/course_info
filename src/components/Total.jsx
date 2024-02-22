const Total = ({ parts }) => {
    const total = 
        parts.reduce((sum, part) => sum + part.exercises, 0);

    console.log("Total exercises:", total);

    return(
        <h3>Total number of exercises: {total}</h3>
    );
};

export default Total;