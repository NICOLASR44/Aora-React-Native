import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

// Définir les types des props pour TabIcon
interface TabIconProps {
  icon: ImageSourcePropType; // Type pour l'image source
  color: string; // Couleur de l'onglet (géré par Tailwind)
  name: string; // Nom de l'onglet
  focused: boolean; // Indique si l'onglet est actif
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      {/* Icône avec Tailwind */}
      <Image source={icon} resizeMode="contain" className="w-6 h-6" style={{ tintColor: color }} />
      {/* Texte de l'onglet */}
      <Text className={`text-xs ${focused ? "text-blue-500 font-bold" : "text-gray-500"}`}>{name}</Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
