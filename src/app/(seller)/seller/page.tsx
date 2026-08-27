import { Agreement, AgreementItem } from "@/components/ui/agreement";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChatInput } from "@/components/ui/chat-input";
import { ChatRow } from "@/components/ui/chat-row";
import { CategoryList } from "@/components/ui/category-list";
import { ConfirmationCard } from "@/components/ui/confirmation-card";
import { DateArea } from "@/components/ui/date-area";
import { Divider } from "@/components/ui/divider";
import { Field } from "@/components/ui/field";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Input } from "@/components/ui/input";
import { NoticeBox } from "@/components/ui/notice-box";
import { PickupStatus } from "@/components/ui/pickup-status";
import { PickupTime } from "@/components/ui/pickup-time";
import { NotificationRow } from "@/components/ui/notification-row";
import { NoticeCard } from "@/components/ui/notice-card";
import { OptionList } from "@/components/ui/option-list";
import { PaymentSummary } from "@/components/ui/payment-summary";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SellerPage() {
  return (
    <main className="min-h-screen bg-seller-surface pb-10">
      <Header />
      <div className="mx-auto max-w-2xl space-y-8 p-4 sm:p-6">
        <section className="space-y-3">
          <p className="text-seller-label font-semibold text-seller-muted">
            DESIGN SYSTEM
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PickupStatus status="pending" />
            <PickupStatus status="preparing" />
            <PickupStatus status="ready" />
            <PickupStatus status="completed" />
            <Badge tone="neutral">기본 배지</Badge>
          </div>
        </section>

        <Hero
          action={<Button size="sm">자세히 보기</Button>}
          description="이미지와 설명, 행동 버튼을 조합하는 공통 히어로 영역입니다."
          title="공통 템플릿 구성"
        />

        <section className="space-y-4 rounded-seller-card bg-white p-4 sm:p-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              판매자 정보
            </h1>
            <p className="mt-1 text-sm text-seller-muted">
              입력과 선택 영역의 기본 구성입니다.
            </p>
          </div>
          <Divider />
          <Field htmlFor="store-name" label="상점명" required>
            <Input id="store-name" placeholder="상점명을 입력하세요" />
          </Field>
          <Field htmlFor="category" label="카테고리">
            <Select defaultValue="" id="category">
              <option disabled value="">
                카테고리를 선택하세요
              </option>
              <option value="flower">꽃·식물</option>
              <option value="dessert">디저트</option>
              <option value="grocery">식료품</option>
            </Select>
          </Field>
          <Field
            description="고객에게 보이는 안내 문구입니다."
            htmlFor="store-description"
            label="소개"
          >
            <Textarea
              id="store-description"
              placeholder="상점 소개를 입력하세요"
            />
          </Field>
          <Button fullWidth size="lg">
            저장하기
          </Button>
        </section>

        <section className="space-y-3">
          <NoticeBox title="픽업 안내">
            주문 확인 후 고객에게 픽업 가능 시간을 안내해 주세요.
          </NoticeBox>
          <Agreement>
            <AgreementItem label="약관 전체동의" />
            <AgreementItem label="개인정보 수집 및 이용 동의" />
          </Agreement>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <DateArea label="날짜 선택" />
          <PickupTime
            slots={["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"]}
            value="11:00"
          />
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <OptionList
            name="sample-option"
            options={[
              { description: "설명 텍스트", label: "옵션 1", value: "one" },
              { description: "설명 텍스트", label: "옵션 2", value: "two" },
            ]}
            value="one"
          />
          <CategoryList
            items={[
              { label: "카테고리", value: "category" },
              { label: "세부 분류", value: "sub-category" },
            ]}
          />
        </section>

        <Calendar
          days={[
            null,
            null,
            null,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
          ]}
          monthLabel="2026년 8월"
          selectedDay={27}
        />

        <section className="space-y-3">
          <NoticeCard date="2026.08.27" title="공지 카드">
            제목과 날짜, 본문을 보여주는 정보 카드입니다.
          </NoticeCard>
          <NotificationRow
            description="새로운 알림 내용을 표시합니다."
            title="알림 행"
          />
          <PaymentSummary
            items={[
              { label: "상품 금액", value: "25,000원" },
              { label: "할인", value: "-2,000원" },
            ]}
            totalValue="23,000원"
          />
          <ConfirmationCard actionLabel="확인" title="완료되었습니다">
            완료 상태를 안내하는 공통 확인 카드입니다.
          </ConfirmationCard>
        </section>

        <section className="space-y-3 rounded-seller-card bg-white p-4">
          <ChatRow sentAt="10:20">수신 메시지</ChatRow>
          <ChatRow sentAt="10:21" variant="outgoing">
            발신 메시지
          </ChatRow>
          <ChatRow variant="system">시스템 안내 메시지</ChatRow>
        </section>
      </div>
      <div className="mx-auto max-w-2xl">
        <ChatInput />
      </div>
    </main>
  );
}
