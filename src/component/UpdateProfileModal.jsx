"use client";

import { authClient } from "@/lib/auth.client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaUser } from "react-icons/fa";

export function UpdateProfileModal() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Modal.Trigger>
        <Button variant="secondary">Update Profile</Button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Update your name and profile image.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <TextField className="w-full">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" required />
                  </TextField>

                  {/* Image */}
                  <TextField className="w-full">
                    <Label>Image URL</Label>
                    <Input
                      name="image"
                      type="url"
                      placeholder="Enter your image URL"
                      required
                    />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    {/* IMPORTANT: submit button */}
                    <Button type="submit" slot="close">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
