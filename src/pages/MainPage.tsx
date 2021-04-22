import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../assets/logo.jpg'
import React, { useState } from 'react';
import { add, help, home, key, settings } from 'ionicons/icons';

export interface Item {
  id: number;
  text: string;
}

export interface Item2 {
  id2: number;
  text2: string;
}

const MainPage: React.FC = () => {

  const [items, setItems] = useState<Item[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const [items2, setItems2] = useState<Item2[]>([]);
  const [showModal2, setShowModal2] = useState(false);
  const [text2, setText2] = useState('');

  const addItem = () => {
    const nextId = Math.random()
    const item: Item = {
      id: nextId,
      text
    };
    setItems([...items, item]);
    setShowModal(false);
    setText('');
  };

  const addItem2 = () => {
    const nextId2 = Math.random()
    const item2: Item2 = {
      id2: nextId2,
      text2
    };
    setItems2([...items2, item2]);
    setShowModal2(false);
    setText2('');
  };

  const deleteItem2 = (item2: Item2) => {
    const newItems2 = items2.filter(t => t.id2 !== item2.id2);
    setItems2(newItems2);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar >
          <IonTitle>List it</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      {items.length === 0 ? (
          <div className="container">
            <p>Add new list by clicking the add button</p>
          </div>
        ) : (
            <IonList lines="none">
              {items.map((todo, i) => (
                <IonItem key={i}>
                  <IonLabel>
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{todo.text}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonImg class="image1" src={logo}></IonImg>
                        <IonButton expand="block" onClick={() => setShowModal2(true)} >View {todo.text}</IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonLabel>
                </IonItem>))}
            </IonList>)}

        <IonModal
          onDidDismiss={() => setShowModal(false)}
          isOpen={showModal}>
          <IonCard class="container">
            <IonCardHeader>
              <IonCardTitle>Create new list</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonImg src={logo} />
              <IonList >
                <IonItem>
                  <IonInput placeholder="Name of the list" id="item" title="Item" value={text} onIonChange={e => setText(e.detail.value!)} />
                </IonItem>
              </IonList>
              <IonButton expand="block" onClick={addItem}>Save</IonButton>
              <IonButton color="danger" expand="block" onClick={() => setShowModal(false)}>Cancel</IonButton>
            </IonCardContent>
          </IonCard>
        </IonModal>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal
          onDidDismiss={() => setShowModal2(false)}
          isOpen={showModal2}>
          <IonCard class="container2">
            <IonCardHeader>
              <IonCardTitle>Add items</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            {items2.length === 0 ? (
          <div className="container2">
          </div>
        ) : (
            <IonList>
              {items2.map((todo2, i2) => (
                <IonItem key={i2}>
                  <IonLabel>
                    <h2>{todo2.text2}</h2>
                  </IonLabel>
                  <IonButton color="danger" onClick={() => deleteItem2(todo2)} slot="end">Remove</IonButton>
                </IonItem>
              ))}
            </IonList>
          )}
              <IonList>
                <IonItem>
                  <IonInput placeholder="Item" id="item" title="Item" value={text2} onIonChange={e2 => setText2(e2.detail.value!)} />
                </IonItem>
              </IonList>
              <IonButton expand="block" onClick={addItem2}>Add</IonButton>
              <IonButton color="danger" expand="block" onClick={() => setShowModal2(false)}>Cancel</IonButton>
            </IonCardContent>
          </IonCard>
          </IonModal>

          <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon  icon={settings} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton routerLink="/About">
              <IonIcon icon={help} />
            </IonFabButton>
            <IonFabButton routerLink="/MainPage">
              <IonIcon icon={home} />
            </IonFabButton>
            <IonFabButton routerLink="/Account">
              <IonIcon icon={key} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;