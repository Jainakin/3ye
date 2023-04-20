import { Text } from "@mantine/core";

export function Logo() {
  return (
    <Text
      variant="gradient"
      gradient={{ from: "#00FFF0", to: "#0500FF", deg: 45 }}
      // sx={{ fontFamily: 'Verdana, sans-serif', }}
      ta="center"
      // fz="xl"
      // fw={900}
      size={36}
      weight={900}
    >
      3ye
    </Text>
  );
}
