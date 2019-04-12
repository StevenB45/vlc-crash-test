import React from 'react'
import Router from 'react-native-easy-router'
import { Text, View } from 'react-native'
import { VlcSimplePlayer } from 'react-native-yz-vlcplayer';

const First = ({ router }) => (
    <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF', }}>
      <Text onPress={() => router.push.Second({ name: 'John' })}>PLAY</Text>
    </View>
);

const Second = ({ router, name }) => (
    <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',}}>
        <VlcSimplePlayer
            ref={ref => this.vlCPlayerView = ref}
            style={{position: 'absolute', height: '100%'}}
            url={'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov'}
            // videoAspectRatio={wp('100%') + ':' + hp('100%')}
            autoAspectRatio={true}
            isLive={true}
            autoplay={true}
            autoReloadLive={true}
            initType={2}
            initOptions={[
                "--rtsp-tcp",
                "--network-caching=" + 150,
                "--no-stats",
                "--verbose=4",

            ]}
            hwDecoderEnabled={1}
            hwDecoderForced={1}
            mediaOptions={{
                ':network-caching': 30,
                ':live-caching': 30,
            }}
        />
      <Text onPress={() => router.pop()}>GO BACK</Text>
    </View>
);

const routes = { First, Second };
const App = () => <Router routes={routes} initialRoute="First" />;

export default App
