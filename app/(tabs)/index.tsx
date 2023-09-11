import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";

import LottieView from "lottie-react-native";
import { useContext, useRef } from "react";
import { ThreadsContext } from "../../context/thread-context";
import ThreadsItem from "../../components/ThreadItem";


export default function TabOneScreen() {
  const animationRef = useRef<LottieView>(null);

  const threads = useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef?.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <LottieView
          ref={animationRef}
          source={require("./../../json/animation_lmf2xgne.json")}
          autoPlay
          loop={false}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}
          // onAnimationFinish={()=> alert('Hello World')}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} thread={thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
