import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const QuranDetail = ({ route }) => {
    //ambil data dari route parameter
    const { nomorSurat } = route.params;
    // buat state
    const [data, getData] = useState(null);
    // buat fungsi api
    const ambilData = async () => {
        try {
            //konek ke api
            const respon = await fetch(
                `https://equran.id/api/v2/surat/${nomorSurat}`,
            )
            // ubah respon ke bentuk json
            const hasil = respon.json()
            console.log(hasil.data.ayat);
            setData(hasil.data.ayat);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        ambilData();
    });

    return (
        <View>
            <Text>QuranDetail</Text>
            <ScrollView>
                {data?.map((isi, index) => {
                    return <Text key={index}>{isi.textArab}</Text>
                })}
            </ScrollView>
        </View>
    );
};

export default QuranDetail;

const styles = StyleSheet.create({});