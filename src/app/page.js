"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Space,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="xs">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Space h="xs" />
      <Textarea
        placeholder="Do you enjoy eating? "
        minRows={3}
        label="Your review"
      />

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider my="sm" />
      <Group spacing="md" position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly></Rating>
      </Group>

      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />

      <Group spacing="md" position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly></Rating>
      </Group>

      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination position="center" total={20} color="orange" mt="md" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Kaewtar 650610750
      </Text>
    </Container>
  );
}
