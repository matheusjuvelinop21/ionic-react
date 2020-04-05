import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [courses, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.balta.io/v1/courses")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Curssos Oline</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {courses.map((course: any) => (
          <IonCard key="course.tag">
            <img
              src={`https://baltaio.blob.core.windows.net/social/${course.tag}.png`}
              alt={course.tag}
            />
            <IonItem>
              <IonLabel>
                <h3>{course.tag}</h3>
                <p>{course.title}</p>
              </IonLabel>
            </IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
