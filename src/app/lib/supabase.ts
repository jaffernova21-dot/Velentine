import { createClient } from '@supabase/supabase-js';
import { Stroke } from '../utils/encode';

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if Supabase is configured
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Create client only if configured (prevents build errors)
export const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl!, supabaseAnonKey!)
    : null;

// Types
export interface GalleryCard {
    id: string;
    sender: string;
    receiver: string;
    drawing: Stroke[];
    created_at: string;
}

// Check if gallery feature is available
export const isGalleryEnabled = (): boolean => isSupabaseConfigured;

// Save a card to the gallery
export const saveCardToGallery = async (
    sender: string,
    receiver: string,
    drawing: Stroke[]
): Promise<{ success: boolean; error?: string }> => {
    // Skip if not configured
    if (!supabase) {
        console.warn('Supabase not configured. Skipping gallery save.');
        return { success: false, error: 'Gallery not configured' };
    }

    try {
        const { error } = await supabase
            .from('cards')
            .insert([{ sender, receiver, drawing }]);

        if (error) {
            console.error('Failed to save card:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (e) {
        console.error('Unexpected error saving card:', e);
        return { success: false, error: 'Unexpected error' };
    }
};

// Fetch all cards for the gallery
export const fetchGalleryCards = async (): Promise<GalleryCard[]> => {
    // Skip if not configured
    if (!supabase) {
        console.warn('Supabase not configured. Returning empty gallery.');
        return [];
    }

    try {
        const { data, error } = await supabase
            .from('cards')
            .select('id, sender, receiver, drawing, created_at')
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) {
            console.error('Failed to fetch cards:', error);
            return [];
        }

        return (data as GalleryCard[]) || [];
    } catch (e) {
        console.error('Unexpected error fetching cards:', e);
        return [];
    }
};

// Log every card creation (for analytics, tracks all links generated)
export const logCardCreation = async (
    sender: string,
    receiver: string
): Promise<{ success: boolean; error?: string }> => {
    // Skip if not configured
    if (!supabase) {
        console.warn('Supabase not configured. Skipping card log.');
        return { success: false, error: 'Supabase not configured' };
    }

    try {
        const { error } = await supabase
            .from('card_logs')
            .insert([{ sender, receiver }]);

        if (error) {
            console.error('Failed to log card creation:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (e) {
        console.error('Unexpected error logging card:', e);
        return { success: false, error: 'Unexpected error' };
    }
};
