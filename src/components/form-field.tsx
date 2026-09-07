import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';

interface FormFieldProps extends TextInputProps {
    label: string;
    error?: string;
}

export function FormField({ label, error, style, ...inputProps }: FormFieldProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, error ? styles.inputError : null, style]}
                placeholderTextColor="#8e8e8e"
                {...inputProps}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 18,
    },

    label: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 6,
        color: '#0c0c0c',
    },

    input: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
    },

    inputError: {
        borderColor: '#e1306c',
    },

    errorText: {
        color: '#e1306c',
        fontSize: 12,
        marginTop: 4,
    },
});
