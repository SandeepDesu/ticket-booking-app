import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Form, Item, Input, Grid, Col, Row, Button } from 'native-base';

export default OneWay = (props) => {
    return (
        <ScrollView>
            <View >
                <Grid>
                    <Col>
                        <Form>
                            <Button full light onPress={props.fromClick}>
                                <Text> From </Text>
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Button full light onPress={props.fromClick}>
                                <Text> To </Text>
                            </Button>
                        </Form>
                    </Col>
                </Grid>
            </View>
            <View>
                <Form>
                    <Item>
                        <Input placeholder="Depart" />
                    </Item>
                    <Item>
                        <Input placeholder="Travellers" />
                    </Item>
                    <Item>
                        <Input placeholder="Class" />
                    </Item>
                </Form>
            </View>
        </ScrollView>
    )
}