import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    Dimensions, TouchableOpacity
} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {IMAGES_URL} from "@/constants/Urls";
import {useAppDispatch, useAppSelector} from "@/store";
import {useRouter} from "expo-router";
import {removeFromSecureStore} from "@/utils/secureStore";
import {logOut} from "@/store/slices/userSlice";

const ProfileScreen = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const user = useAppSelector((state) => state.user.user);

    const handleLogout = async () => {
        await removeFromSecureStore('authToken');
        dispatch(logOut());
        router.replace("/login");
    };


    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1"
                >
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View
                            className="w-full flex justify-center items-start my-6"
                            style={{
                                minHeight: Dimensions.get("window").height - 100,
                            }}
                        >
                            {user ? (
                            <>
                                <Image
                                    source={{uri: `${IMAGES_URL}/400_${user?.image}`}}
                                    style={{width: 300, height: 300}}
                                />

                                <Text className="text-3xl font-bold my-6 text-black">
                                    {user?.name}
                                </Text>

                                <Text className="text-2xl font-bold mb-6 text-black">
                                    Пошта: {user?.email}
                                </Text>

                                <TouchableOpacity
                                    onPress={handleLogout}
                                    style={styles.logoutButton}
                                >
                                    <Text style={styles.logoutText}>Вийти</Text>
                                </TouchableOpacity>
                            </>
                                )
                                : (
                                    <Text>Завантаження даних...</Text>
                                )}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", padding: 20},
    title: {fontSize: 20, marginBottom: 15, fontWeight: "bold"},
    logoutButton: {
        marginTop: 30,
        padding: 12,
        backgroundColor: "#ff4d4d",
        borderRadius: 8,
        alignItems: "center",
    },
    logoutText: {color: "white", fontWeight: "bold"},
});

export default ProfileScreen;