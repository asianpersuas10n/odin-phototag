import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase";

function Scoreboard() {
  const [bucketScores, setBucketScores] = useState([]);
  const [cityScores, setCityScores] = useState([]);
  const [glassScores, setGlassScores] = useState([]);
  const [highwayScores, setHighwayScores] = useState([]);
  const [cyberpunkScores, setCyberpunkScores] = useState([]);
  const [circusScores, setCircusScores] = useState([]);
  const [scoreLoadingBool, setScoreLoadingBool] = useState(false);

  useEffect(() => {
    const bucketQuery = query(
      collection(db, "Buckets of Buttons and Beads"),
      orderBy("score", "desc"),
      limit(3)
    );
    const cityQuery = query(
      collection(db, "A Small City"),
      orderBy("score", "desc"),
      limit(3)
    );
    const glassQuery = query(
      collection(db, "Glass By The SeaShore"),
      orderBy("score", "desc"),
      limit(3)
    );
    const highwayQuery = query(
      collection(db, "Modern Highway"),
      orderBy("score", "desc"),
      limit(3)
    );
    const cyberpunkQuery = query(
      collection(db, "Cyberpunk 2077"),
      orderBy("score", "desc"),
      limit(3)
    );
    const circusQuery = query(
      collection(db, "Circus"),
      orderBy("score", "desc"),
      limit(3)
    );

    const buildTables = async () => {
      let tempArr = [];
      const bucketSnapshot = await getDocs(bucketQuery);
      bucketSnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setBucketScores(tempArr);
      tempArr = [];
      const citySnapshot = await getDocs(cityQuery);
      citySnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setCityScores(tempArr);
      tempArr = [];
      const glassSnapshot = await getDocs(glassQuery);
      glassSnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setGlassScores(tempArr);
      tempArr = [];
      const highwaySnapshot = await getDocs(highwayQuery);
      highwaySnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setHighwayScores(tempArr);
      tempArr = [];
      const cyberpunkSnapshot = await getDocs(cyberpunkQuery);
      cyberpunkSnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setCyberpunkScores(tempArr);
      tempArr = [];
      const circusSnapshot = await getDocs(circusQuery);
      circusSnapshot.forEach((doc) => {
        tempArr = [...tempArr, doc.data()];
      });
      setCircusScores(tempArr);
    };
    buildTables();
    setScoreLoadingBool(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {scoreLoadingBool && (
        <div className="scoreboard">
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    Buckets of Buttons and Beads
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {bucketScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    A Small City
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {cityScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    Glass By The SeaShore
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {glassScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    Modern Highway
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {highwayScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    Cyberpunk 2077
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {cyberpunkScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={3} className="tableName">
                    Circus
                  </th>
                </tr>
                <tr>
                  <th>Place</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {circusScores.map((score, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{score.name}</td>
                      <td>{score.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
