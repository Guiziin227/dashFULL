import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";

const SingupForm = () => {
    return (
        <form>
            <div className="flex flex-col gap-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe"/>
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="text" placeholder="Johndoe@email.com"/>
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                </div>

                <SubmitButton>Submit</SubmitButton>
            </div>
        </form>
    );
};

export default SingupForm;