import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from 'react'

const Quran = () => {
    // 1. siapkan state untuk menampung data
    const [dataQuran, setDataQuran] = useState([]);
    //2. siapkan fungsi memanggil data dari API
    const ambilData = async () => {
        try {
            //konek ke api
            const respon = await fetch('https://equran.id/api/v2/surat');
            // ubah data ke bentuk json
            const data = await respon.json();
            // simpan data ke state
            // console.log(data.data)
            setDataQuran(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    // 3. load halaman dengan useEffect
    useEffect(() => {
        ambilData();
    });

    return (
        <View style={styles.box}>
            <Text>Quran</Text>
            {dataQuran?.map((data, index) => {
                return (
                    <TouchableOpacity key={index}>
                        <Text style={styles.tex}>
                            {data.nomor} - {data.nama}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
};

export default Quran;


const styles = StyleSheet.create({
    box: {
        padding: 10,
    }
})
