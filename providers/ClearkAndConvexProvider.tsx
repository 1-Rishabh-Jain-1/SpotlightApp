import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from 'convex/react-clerk';

export default function ClearkAndConvexProvider({ children }: { children: React.ReactNode }) {
    const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string);

    return (
        <ClerkProvider tokenCache={tokenCache}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}