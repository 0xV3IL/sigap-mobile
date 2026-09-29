import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/common/AppButton';
import { AppCard } from '@/components/common/AppCard';
import { AppText } from '@/components/common/AppText';
import { Screen } from '@/components/common/Screen';
import { Colors, Radius, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <AppText variant="title">Halo, User 👋</AppText>
          <AppText variant="caption">
            Jakarta, Indonesia
          </AppText>
        </View>
      </View>

      {/* Earthquake Alert */}
      <AppCard style={styles.alertCard}>
        <AppText variant="subtitle">
          ⚠️ GEMPA TERDETEKSI
        </AppText>

        <View style={styles.magnitudeRow}>
          <AppText style={styles.magnitude}>M 5.2</AppText>

          <View>
            <AppText>48 km dari lokasi Anda</AppText>
            <AppText variant="caption">
              Kedalaman 10 km
            </AppText>
          </View>
        </View>

        <AppButton
          onPress={() => {}}
          style={styles.button}
        >
          Lihat Detail
        </AppButton>
      </AppCard>

      {/* Family Safety */}
      <View style={styles.section}>
        <AppText variant="subtitle">Family Safety</AppText>

        <AppCard>
          <View style={styles.familyRow}>
            <View>
              <AppText style={styles.statusGreen}>
                🟢 2 Aman
              </AppText>
            </View>

            <View>
              <AppText style={styles.statusOrange}>
                🟠 1 Menunggu
              </AppText>
            </View>
          </View>
        </AppCard>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <AppText variant="subtitle">Quick Actions</AppText>

        <View style={styles.actions}>
          <AppCard style={styles.actionCard}>
            <AppText>🗺️</AppText>
            <AppText variant="caption">Map</AppText>
          </AppCard>

          <AppCard style={styles.actionCard}>
            <AppText>👨‍👩‍👧</AppText>
            <AppText variant="caption">Family</AppText>
          </AppCard>

          <AppCard style={styles.actionCard}>
            <AppText>📚</AppText>
            <AppText variant="caption">Learn</AppText>
          </AppCard>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: Spacing.lg,
  },

  alertCard: {
    borderColor: Colors.light.warning,
    borderWidth: 1.5,
  },

  magnitudeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginTop: Spacing.md,
  },

  magnitude: {
    fontSize: 36,
    fontWeight: '700',
  },

  button: {
    marginTop: Spacing.md,
  },

  section: {
    marginTop: Spacing.xl,
    gap: Spacing.sm,
  },

  familyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statusGreen: {
    color: Colors.light.success,
    fontWeight: '600',
  },

  statusOrange: {
    color: Colors.light.warning,
    fontWeight: '600',
  },

  actions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },

  actionCard: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.xs,
  },
});