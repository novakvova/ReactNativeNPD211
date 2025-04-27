import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { useRegisterMutation } from "@/services/accountService";
import { useRouter } from "expo-router"; // Використовуємо для навігації
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import {Ionicons} from "@expo/vector-icons";
import {getFileFromUriAsync} from "@/utils/getFileFromUriAsync";
import LoadingOverlay from "@/components/LoadingOverlay";

const SignUpScreen = () => {
    const router = useRouter(); // Ініціалізуємо роутер
    const [form, setForm] = useState({ email: "", password: "", phoneNumber: "", firstname: "", lastname: "" });

    const [image, setImage] = useState<string | null>(null);

    const handleChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const [register, { isLoading, error } ] = useRegisterMutation();

    const handleSignUp = async () => {
        console.log("Реєстрація:", form);
        try {
            if(image) {
                const file = await getFileFromUriAsync(image);

                await register({
                    ...form,
                    //@ts-ignore
                    image: file
                }).unwrap();
                console.log("registered successfully");
                Alert.alert('Успіх', 'Реєстрація успішна!\nБудь ласка, увійдіть в акаунт)');
                router.replace("/login");
            }

        }
        catch (err) {
            console.log("Register is problem:", err);
        }
    };

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!permissionResult.granted) {
            alert("Для вибору фото дай доступ до файлів");
            return;
        }
        const result =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
        });
        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1"
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <LoadingOverlay visible={isLoading} />
                        
                        <View
                            className="w-full flex justify-center items-center my-6"
                            style={{
                                minHeight: Dimensions.get("window").height - 100,
                            }}
                        >
                            <Text className="text-3xl font-bold mb-6 text-black">
                                Реєстрація
                            </Text>

                            <FormField
                                title={"Ім'я"}
                                value={form.firstname}
                                handleChangeText={(value: string) => handleChange("firstname", value)}
                                placeholder={"Вкажіть ім'я"}
                            />

                            <FormField
                                title={"Прізвище"}
                                value={form.lastname}
                                handleChangeText={(value: string) => handleChange("lastname", value)}
                                placeholder={"Вкажіть прізвище"}
                            />

                            <FormField
                                title={"Телефон"}
                                value={form.phoneNumber}
                                handleChangeText={(value: string) => handleChange("phoneNumber", value)}
                                placeholder={"Вкажіть телефон"}
                            />

                            <View className={"space-y-2 w-full"}>
                                <TouchableOpacity onPress={pickImage} className={"mt-4 p-4 bg-blue-400 rounded-xl"}>
                                    <View className="flex flex-row items-center justify-center gap-2">
                                        <Text className="text-center text-white font-psemibold">Pick an Image</Text>
                                        <Ionicons name="image" size={24} color="white" />
                                    </View>
                                </TouchableOpacity>
                                {image && (
                                    <View className="w-full flex justify-center items-center">
                                        <Image source={{ uri: image }} className="w-40 h-40 rounded-full" />
                                    </View>
                                )}
                            </View>

                            <FormField
                                title={"Пошта"}
                                value={form.email}
                                handleChangeText={(value: string) => handleChange("email", value)}
                                placeholder={"Вкажіть пошту"}
                                keyboardType="email-address"
                            />

                            <FormField
                                title={"Пароль"}
                                value={form.password}
                                handleChangeText={(value: string) => handleChange("password", value)}
                                placeholder={"Вкажіть пароль"}
                                secureTextEntry={true}
                            />

                            {/* Кнопка "Реєстрація" */}
                            <TouchableOpacity
                                onPress={handleSignUp}
                                className="w-full bg-blue-500 p-4 rounded-lg mt-4"
                            >
                                <Text className="text-white text-center text-lg font-bold">
                                    Зареєструватися
                                </Text>
                            </TouchableOpacity>

                            {/* Кнопка "Вхід" */}
                            <TouchableOpacity
                                onPress={() => router.replace("/login")}
                                className="w-full bg-gray-300 p-4 rounded-lg mt-2"
                            >
                                <Text className="text-black text-center text-lg font-medium">
                                    Вже є акаунт? Увійти
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default SignUpScreen;
